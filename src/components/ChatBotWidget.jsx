import { useState, useEffect, useRef } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
import "./../styles/chatbot-widget.css";
import { useTranslation } from 'react-i18next'

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const messageShownRef = useRef(false);
  const { t } = useTranslation()

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
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <div className="chatbot-button-container">
        <button className="chatbot-button" onClick={toggleChatbot}>
          {isOpen ? (
            <CloseIcon sx={{ fontSize: 24 }} />
          ) : (
            <ChatBubbleIcon sx={{ fontSize: 24 }} />
          )}
        </button>
        {showMessage && !isOpen && (
          <div className="chatbot-message-wrapper">
            <div className="chatbot-message">{t('chat-bubble-notification')}</div>
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

          {!isLoading && <button
            className="chatbot-popup-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
          >
            ×
          </button>}

          <iframe
            src="https://chatbot-ai-ge.vercel.app/"
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
