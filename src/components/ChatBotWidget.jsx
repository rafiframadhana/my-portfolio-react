import { useState, useEffect, useRef } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
import "./../styles/chatbot-widget.css";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const messageShownRef = useRef(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowMessage(false);
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
            <div className="chatbot-message">Hi, how can I help you?</div>
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
          <button
            className="chatbot-popup-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
          >
            ×
          </button>
          <iframe
            src="https://chatbot-ai-ge.vercel.app/"
            title="Chatbot"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
