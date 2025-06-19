import React from "react";
import "./not-found.css";

const NotFound = () => {
  const stars = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div className="not-found-container">
      {/* Animated starfield background */}
      {stars.map((star) => (
        <div
          key={star}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Nebula-like gradient overlays */}
      <div className="nebula-overlay nebula-1"></div>
      <div className="nebula-overlay nebula-2"></div>

      <div className="content-wrapper">
        {/* Main 404 with elegant glow */}
        <div className="error-number-container">
          <h1 className="error-number">404</h1>
          <div className="error-glow glow-blue">404</div>
          <div className="error-glow glow-purple">404</div>
        </div>

        {/* Professional error message */}
        <div className="error-message-section">
          <h2 className="error-title">Page Not Found</h2>
          <div className="divider"></div>
          <p className="error-description">
            The page you're looking for doesn't exist.
            <br />
            Looks like Rafif hasn't coded this part yet.
            <br />
            Let’s head back before we get stuck here.
          </p>
        </div>

        {/* Broken Robot Animation */}
        <div className="robot-container">
          <div className="robot-wrapper">
            {/* Robot Body */}
            <div className="robot">
              {/* Head */}
              <div className="robot-head">
                <div className="robot-eye error-eye"></div>
                <div className="robot-eye dead-eye"></div>
                <div className="robot-mouth"></div>
                {/* Antenna */}
                <div className="robot-antenna"></div>
                <div className="robot-antenna-tip"></div>
              </div>

              {/* Body */}
              <div className="robot-body">
                <div className="robot-screen"></div>
                <div className="robot-light light-green"></div>
                <div className="robot-light light-yellow"></div>
                <div className="robot-panel"></div>
              </div>

              {/* Arms */}
              <div className="robot-arm arm-left"></div>
              <div className="robot-arm arm-right"></div>

              {/* Legs */}
              <div className="robot-leg leg-left"></div>
              <div className="robot-leg leg-right"></div>
            </div>

            {/* Error sparks */}
            <div className="spark spark-1"></div>
            <div className="spark spark-2"></div>
            <div className="spark spark-3"></div>

            {/* Circuit lines */}
            <div className="circuit-overlay">
              <svg className="circuit-svg" viewBox="0 0 100 100">
                <path
                  d="M10,50 Q25,30 50,50 T90,50"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="circuit-path"
                />
                <circle
                  cx="25"
                  cy="40"
                  r="1"
                  fill="currentColor"
                  className="circuit-node node-1"
                />
                <circle
                  cx="75"
                  cy="60"
                  r="1"
                  fill="currentColor"
                  className="circuit-node node-2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Elegant home button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="home-button"
        >
          <span className="button-content">
            <svg
              className="button-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return Home
          </span>
          <div className="button-overlay"></div>
        </button>

        {/* Subtle coordinates/tech aesthetic */}
        <div className="error-code">
          ERROR_CODE: 404 &nbsp;|&nbsp; STATUS: NOT_FOUND &nbsp;|&nbsp;
          LOCATION: UNKNOWN
        </div>
      </div>
    </div>
  );
};

export default NotFound;
