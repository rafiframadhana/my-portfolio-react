import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [images.length, isPaused]);

  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={() => {
        setIsPaused(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsHovered(false);
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div className="image-wrapper" key={currentIndex}>
          <motion.img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="slider-image"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
          {isHovered && (
            <>
              <div className="nav-overlay left">
                <button
                  className="nav-button prev"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  ‹
                </button>
              </div>
              <div className="nav-overlay right">
                <button
                  className="nav-button next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
