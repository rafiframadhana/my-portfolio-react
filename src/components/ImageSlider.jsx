import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Add this state

  // Preload next image
  const preloadNextImage = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    const img = new Image();
    img.src = images[nextIndex].src;
    setIsLoading(true);

    img.onload = () => {
      setIsLoading(false);
    };
  };

  useEffect(() => {
    if (!isPaused && !isLoading) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
          return nextIndex;
        });
        preloadNextImage(); // Preload the next image
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [images.length, isPaused, isLoading, currentIndex]);

  // Preload next image when component mounts and when current image changes
  useEffect(() => {
    preloadNextImage();
  }, [currentIndex]);

  const slideVariants = {
    enterFromRight: { opacity: 0, x: 50 },
    enterFromLeft: { opacity: 0, x: -50 },
    center: { opacity: 1, x: 0 },
    exitToLeft: { opacity: 0, x: -50 },
    exitToRight: { opacity: 0, x: 50 },
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left, show next
      handleNext();
    } else {
      // Swiped right, show previous
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div className="image-wrapper" key={currentIndex}>
          <motion.img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="slider-image"
            initial={direction > 0 ? "enterFromRight" : "enterFromLeft"}
            animate="center"
            exit={direction > 0 ? "exitToLeft" : "exitToRight"}
            variants={slideVariants}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            onLoad={() => setIsLoading(false)}
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
