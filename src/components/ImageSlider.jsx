import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@mui/material";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSwipe, setIsSwipe] = useState(false);

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
        paginate(1);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [images.length, isPaused, isLoading, currentIndex]);

  useEffect(() => {
    preloadNextImage();
  }, [currentIndex]);

  const slideVariants = {
    enterLeft: {
      x: "-10%",
      opacity: 0,
    },
    enterRight: {
      x: "10%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: isSwipe ? 0 : 0.5,
        ease: "easeInOut",
      },
    },
    exitLeft: {
      x: "-10%",
      opacity: 0,
      transition: {
        duration: isSwipe ? 0 : 0.5,
        ease: "easeInOut",
      },
    },
    exitRight: {
      x: "10%",
      opacity: 0,
      transition: {
        duration: isSwipe ? 0 : 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Reduce the threshold to make swiping more sensitive
  const swipeConfidenceThreshold = 5000;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection, fromSwipe = false) => {
    setIsSwipe(fromSwipe);
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
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
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          className="image-wrapper"
          key={currentIndex}
          initial={direction > 0 ? "enterRight" : "enterLeft"}
          animate="visible"
          exit={direction > 0 ? "exitLeft" : "exitRight"}
          variants={slideVariants}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7} // Reduced from 1 to make it more responsive
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1, true);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1, true);
            }
          }}
        >
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
              }}
            />
          ) : (
            <motion.img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="slider-image"
              onLoad={() => setIsLoading(false)}
              style={{
                pointerEvents: "none",
              }}
            />
          )}
          {isHovered && !isLoading && (
            <>
              <div className="nav-overlay left">
                <button
                  className="nav-button prev"
                  onClick={() => paginate(-1, false)}
                  aria-label="Previous image"
                >
                  ‹
                </button>
              </div>
              <div className="nav-overlay right">
                <button
                  className="nav-button next"
                  onClick={() => paginate(1, false)}
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
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
