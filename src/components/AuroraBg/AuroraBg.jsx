import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = ({ 
  className = "", 
  children, 
  showRadialGradient = true,
  ...props 
}) => {
  return (
    <main>
      <div
        className={`relative flex h-screen flex-col items-center justify-center bg-black text-white transition-all duration-300 ${className}`}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className={`aurora-layer ${showRadialGradient ? 'radial-mask' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
          />
        </div>
        {children}

        <style jsx>{`
          .aurora-layer {
            pointer-events: none;
            position: absolute;
            inset: -10px;
            filter: blur(10px);
            will-change: transform;
            background-image: 
              repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
              repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%);
            background-size: 300%, 200%;
            background-position: 50% 50%, 50% 50%;
            animation: aurora 60s linear infinite;
          }

          .aurora-layer::after {
            content: "";
            position: absolute;
            inset: 0;
            background-image: 
              repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
              repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%);
            background-size: 200%, 100%;
            background-attachment: fixed;
            mix-blend-mode: difference;
            animation: aurora 60s linear infinite;
          }

          .radial-mask {
            mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
          }

          @keyframes aurora {
            from {
              background-position: 50% 50%, 50% 50%;
            }
            to {
              background-position: 350% 50%, 350% 50%;
            }
          }

          /* Enhanced dark aurora colors */
          .aurora-layer {
            background-image: 
              repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
              repeating-linear-gradient(100deg, 
                #3b82f6 10%, 
                #60a5fa 15%, 
                #93c5fd 20%, 
                #a5b4fc 25%, 
                #ddd6fe 30%
              );
          }

          .aurora-layer::after {
            background-image: 
              repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
              repeating-linear-gradient(100deg, 
                #3b82f6 10%, 
                #60a5fa 15%, 
                #93c5fd 20%, 
                #a5b4fc 25%, 
                #ddd6fe 30%
              );
          }

          /* Additional aurora layers for more depth */
          .aurora-layer::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%);
            animation: aurora-glow 40s ease-in-out infinite alternate;
          }

          @keyframes aurora-glow {
            0% {
              transform: scale(1) rotate(0deg);
              opacity: 0.5;
            }
            100% {
              transform: scale(1.1) rotate(2deg);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
    </main>
  );
};

export default AuroraBackground;