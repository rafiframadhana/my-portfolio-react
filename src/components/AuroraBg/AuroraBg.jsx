// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import './AuroraBackground.css';

// Aurora Background Component
export const AuroraBackground = ({
  className = "",
  children,
  showRadialGradient = true,
  ...props
}) => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Detect low-performance devices
    const detectPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const isLowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      return isMobile || isLowMemory || isLowCPU;
    };

    setIsLowPerformance(detectPerformance());
  }, []);

  return (
    <main>
      <div
        className={`aurora-container ${className}`}
        {...props}
      >
        <div className="aurora-overlay">
          <motion.div
            className={`aurora-animation ${showRadialGradient ? 'aurora-mask' : ''} ${isLowPerformance ? 'aurora-low-performance' : ''}`}
            animate={isLowPerformance ? {} : {
              backgroundPosition: [
                "50% 50%, 50% 50%",
                "350% 50%, 350% 50%"
              ]
            }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </div>
        {children}
      </div>
    </main>
  );
};

// Demo Component
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="content-container"
      >
        
      </motion.div>
    </AuroraBackground>
  );
}


