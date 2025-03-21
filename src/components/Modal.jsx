import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            {children}
          </motion.div>
        </StyledOverlay>
      )}
    </AnimatePresence>
  );
}

const StyledOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center; /* This ensures perfect centering */
  z-index: 10000;
  overflow: hidden; /* Prevents scrolling */

  .modal-content {
    background: var(--cert-box-bg);
    padding: 1.5rem;
    border-radius: 16px;
    width: 90vw;
    max-width: 700px;
    max-height: 95vh;
    aspect-ratio: auto;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 2px;
    right: 5px;
    background: none;
    border: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: rotate(90deg);
    }
  }

  @media (max-width: 768px) {
    .modal-content {
      max-width: 95vw;
      max-height: 70vh;
    }
  }
`;




