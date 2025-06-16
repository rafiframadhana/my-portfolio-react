import { useState, useEffect, useRef } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from "react-i18next";
import './chatbot-widget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const messageShownRef = useRef(false);
  const { t } = useTranslation();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowMessage(false);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isOpen && !messageShownRef.current) {
      const timer = setTimeout(() => {
        setShowMessage(true);
        messageShownRef.current = true;
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showMessage) {
      const hideTimer = setTimeout(() => {
        setShowMessage(false);
      }, 60000 * 3);

      return () => clearTimeout(hideTimer);
    }
  }, [showMessage]);

  return (
    <>
      <div className="chatbot-button-container">
        <button className="chatbot-button" onClick={toggleChatbot}>
          {isOpen ? (
            <ArrowForwardIosIcon sx={{ fontSize: 24, transform: 'rotate(90deg)' }} />
          ) : (
            <ChatBubbleIcon sx={{ fontSize: 24 }} />
          )}
        </button>
        {showMessage && !isOpen && (
          <div className="chatbot-message-wrapper">
            <div className="chatbot-message">
              {t("chat-bubble-notification")}
            </div>
            <div
              className="close-message-btn"
              onClick={() => setShowMessage(false)}
              aria-label="Close message"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowMessage(false);
              }}
            >
              ×
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="chatbot-popup">
          {isLoading && (
            <div className="chatbot-loader">
              <div className="chatbot-loader-dots"></div>
            </div>
          )}

          {!isLoading && (
            <button
              className="chatbot-popup-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          )}

          <iframe
            src="https://rafif-ai.vercel.app/"
            title="Chatbot"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
