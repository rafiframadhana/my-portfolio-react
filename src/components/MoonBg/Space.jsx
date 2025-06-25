import React from "react";

const SpaceBackground = () => {
  return (
    <div className="space-bg">
      {/* Animated moon */}
      <div className="moon-container">
        <div className="moon">
          <div className="moon-craters"></div>
          <div className="moon-glow"></div>
        </div>
      </div>

      {/* Enhanced animated waves */}
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      <div className="wave wave-4"></div>

      {/* Multiple star layers */}
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-large"></div>
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>

      {/* Enhanced floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      <div className="particle particle-7"></div>
      <div className="particle particle-8"></div>

      {/* Enhanced nebula effects */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      {/* Cosmic dust trails */}
      <div className="dust-trail dust-1"></div>
      <div className="dust-trail dust-2"></div>

      {/* Content overlay */}
      {/* <div className="content-demo">
        <h1>Animated Space Theme</h1>
        <p>Beautiful space background with animated moon, shooting stars, and enhanced cosmic effects.</p>
        <p className="light-gray">Perfect readability for all your content</p>
      </div> */}

      <style jsx>{`
        .space-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(
            ellipse at center,
            #0a0a0a 0%,
            #000000 100%
          );
          overflow: hidden;
          z-index: -1;
        }

        /* Animated Moon */
        .moon-container {
          position: absolute;
          top: 15%;
          right: 10%;
          animation: moon-orbit 60s infinite linear;
        }

        .moon {
          width: 80px;
          height: 80px;
          background: radial-gradient(
            circle at 35% 35%,
            #f3ecd4 0%,
            /* soft pale yellowish */ #e0dac6 40%,
            /* warm light beige */ #bdb6aa 70%,
            /* moon gray */ #a59e8c 100% /* deeper gray-brown */
          );
          border-radius: 50%;
          position: relative;
          box-shadow: inset -5px -5px 10px rgba(80, 70, 50, 0.18),
            0 0 30px rgba(243, 236, 212, 0.08);
          animation: moon-glow-pulse 8s infinite ease-in-out;
        }

        .moon-craters {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-image: radial-gradient(
              circle at 40% 20%,
              rgba(0, 0, 0, 0.1) 3px,
              transparent 4px
            ),
            radial-gradient(
              circle at 60% 60%,
              rgba(0, 0, 0, 0.08) 2px,
              transparent 3px
            ),
            radial-gradient(
              circle at 25% 70%,
              rgba(0, 0, 0, 0.06) 1px,
              transparent 2px
            );
        }

        .moon-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(
            circle,
            rgba(248, 249, 250, 0.05) 0%,
            transparent 70%
          );
          border-radius: 50%;
          animation: glow-intensity 6s infinite ease-in-out;
        }

        /* Enhanced animated waves */
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 120px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(55, 65, 81, 0.08),
            rgba(99, 102, 241, 0.05),
            rgba(55, 65, 81, 0.08),
            transparent
          );
          border-radius: 50%;
          animation: wave-animation 15s infinite linear;
        }

        .wave-1 {
          animation-duration: 18s;
          height: 100px;
          opacity: 0.12;
        }

        .wave-2 {
          animation-duration: 24s;
          animation-delay: -6s;
          height: 80px;
          opacity: 0.08;
        }

        .wave-3 {
          animation-duration: 30s;
          animation-delay: -12s;
          height: 60px;
          opacity: 0.06;
        }

        .wave-4 {
          animation-duration: 36s;
          animation-delay: -18s;
          height: 40px;
          opacity: 0.04;
        }

        /* Enhanced stars with more variety */
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              rgba(255, 255, 255, 0.9),
              transparent
            ),
            radial-gradient(
              2px 2px at 40px 70px,
              rgba(255, 255, 255, 0.7),
              transparent
            ),
            radial-gradient(
              1px 1px at 90px 40px,
              rgba(255, 255, 255, 1),
              transparent
            ),
            radial-gradient(
              1px 1px at 130px 80px,
              rgba(255, 255, 255, 0.8),
              transparent
            ),
            radial-gradient(
              2px 2px at 160px 30px,
              rgba(255, 255, 255, 0.9),
              transparent
            ),
            radial-gradient(
              1px 1px at 200px 90px,
              rgba(99, 102, 241, 0.8),
              transparent
            ),
            radial-gradient(
              1px 1px at 250px 50px,
              rgba(139, 69, 19, 0.7),
              transparent
            );
          background-repeat: repeat;
          background-size: 280px 140px;
          animation: twinkle 8s infinite;
        }

        .stars-small {
          background-size: 200px 100px;
          animation-duration: 6s;
        }

        .stars-medium {
          background-size: 350px 175px;
          animation-duration: 10s;
          animation-delay: -3s;
        }

        .stars-large {
          background-size: 500px 250px;
          animation-duration: 14s;
          animation-delay: -7s;
        }

        /* Shooting stars */
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: shooting 3s infinite linear;
        }

        .shooting-star::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, white, transparent);
          animation: shooting-tail 3s infinite linear;
        }

        .shooting-star-1 {
          top: 20%;
          left: -10px;
          animation-delay: 0s;
          animation-duration: 3s;
        }

        .shooting-star-2 {
          top: 60%;
          left: -10px;
          animation-delay: 8s;
          animation-duration: 2.5s;
        }

        /* Enhanced floating particles */
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: float-particle 25s infinite linear;
        }

        .particle-1 {
          top: 20%;
          left: 10%;
          width: 4px;
          height: 4px;
          animation-duration: 25s;
          animation-delay: 0s;
        }
        .particle-2 {
          top: 60%;
          left: 80%;
          width: 3px;
          height: 3px;
          animation-duration: 30s;
          animation-delay: -5s;
        }
        .particle-3 {
          top: 80%;
          left: 30%;
          width: 2px;
          height: 2px;
          animation-duration: 22s;
          animation-delay: -8s;
        }
        .particle-4 {
          top: 40%;
          left: 60%;
          width: 4px;
          height: 4px;
          animation-duration: 28s;
          animation-delay: -12s;
        }
        .particle-5 {
          top: 15%;
          left: 70%;
          width: 3px;
          height: 3px;
          animation-duration: 24s;
          animation-delay: -3s;
        }
        .particle-6 {
          top: 70%;
          left: 20%;
          width: 2px;
          height: 2px;
          animation-duration: 26s;
          animation-delay: -15s;
        }
        .particle-7 {
          top: 35%;
          left: 85%;
          width: 3px;
          height: 3px;
          animation-duration: 32s;
          animation-delay: -10s;
        }
        .particle-8 {
          top: 50%;
          left: 15%;
          width: 4px;
          height: 4px;
          animation-duration: 29s;
          animation-delay: -7s;
        }

        /* Enhanced nebula effects */
        .nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.04;
          animation: nebula-drift 40s infinite ease-in-out;
        }

        .nebula-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.4) 0%,
            transparent 70%
          );
          top: 20%;
          right: 10%;
          animation-duration: 45s;
        }

        .nebula-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(139, 69, 19, 0.3) 0%,
            transparent 70%
          );
          bottom: 20%;
          left: 15%;
          animation-duration: 35s;
          animation-delay: -15s;
        }

        .nebula-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(
            circle,
            rgba(16, 185, 129, 0.2) 0%,
            transparent 70%
          );
          top: 60%;
          left: 50%;
          animation-duration: 50s;
          animation-delay: -25s;
        }

        /* Cosmic dust trails */
        .dust-trail {
          position: absolute;
          width: 1px;
          height: 100px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: dust-drift 20s infinite linear;
        }

        .dust-1 {
          top: -100px;
          left: 25%;
          animation-delay: 0s;
        }

        .dust-2 {
          top: -100px;
          left: 75%;
          animation-delay: -10s;
        }

        /* Animations */
        @keyframes moon-orbit {
          0% {
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }

        @keyframes moon-glow-pulse {
          0%,
          100% {
            box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.3),
              0 0 30px rgba(248, 249, 250, 0.1);
          }
          50% {
            box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.3),
              0 0 50px rgba(248, 249, 250, 0.2);
          }
        }

        @keyframes glow-intensity {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes wave-animation {
          0% {
            transform: translateX(-50%) translateY(0) rotate(0deg);
          }
          100% {
            transform: translateX(-100%) translateY(-20px) rotate(5deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.8;
          }
          25% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          75% {
            opacity: 0.6;
          }
        }

        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
          }
        }

        @keyframes shooting-tail {
          0% {
            width: 0;
          }
          30% {
            width: 100px;
          }
          100% {
            width: 0;
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120px) translateX(60px);
            opacity: 0;
          }
        }

        @keyframes nebula-drift {
          0%,
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(30px, -40px) scale(1.1) rotate(90deg);
          }
          50% {
            transform: translate(-20px, -30px) scale(0.9) rotate(180deg);
          }
          75% {
            transform: translate(-40px, 20px) scale(1.05) rotate(270deg);
          }
        }

        @keyframes dust-drift {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh) translateX(50px);
            opacity: 0;
          }
        }

        /* Demo content styles */
        .content-demo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 10;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .content-demo h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .content-demo p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 0.5rem;
          max-width: 600px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        .light-gray {
          color: #d1d5db !important;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .moon {
            width: 60px;
            height: 60px;
          }

          .moon-container {
            top: 10%;
            right: 5%;
          }

          .wave {
            height: 60px;
          }
          .particle {
            width: 2px;
            height: 2px;
          }
          .nebula {
            opacity: 0.02;
          }

          .content-demo h1 {
            font-size: 2rem;
          }
          .content-demo p {
            font-size: 1rem;
          }
        }

        /* Performance optimization */
        .space-bg * {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;
