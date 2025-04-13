import React, { useState } from "react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Certifications from "./Certifications.jsx";
import Skills from "./Skills.jsx";
import "./../styles/about-all.css";

export default function AboutAll() {
  const [showAbout, setShowAbout] = useState(true);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [active, setActive] = useState(null);

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowSkills(false);
    setShowProjects(false);
    setShowCertifications(false);
  };

  const handleShowSkills = () => {
    setShowAbout(false);
    setShowSkills(true);
    setShowProjects(false);
    setShowCertifications(false);
  };

  const handleShowProjects = () => {
    setShowAbout(false);
    setShowSkills(false);
    setShowProjects(true);
    setShowCertifications(false);
  };

  const handleShowCertifications = () => {
    setShowAbout(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowCertifications(true);
  };

  const handleActive = (type) => {
    setActive(type);
    if (type === "about") {
      handleShowAbout();
    } else if (type === "skills") {
      handleShowSkills();
    } else if (type === "projects") {
      handleShowProjects();
    } else if (type === "certifications") {
      handleShowCertifications();
    }
  };

  return (
    <section id="about-all">
      <div className="about-all-button">
        <button
          onClick={() => handleActive("about")}
          className={`about-btn ${active === "about" ? "active" : ""}`}
        >
          <i class="fa-solid fa-user"></i> <span className="about-all-btn-span">&nbsp;About</span>
        </button>

        <button
          onClick={() => handleActive("skills")}
          className={`skills-btn ${active === "skills" ? "active" : ""}`}
        >
          <i class="fa-solid fa-code"></i> <span className="about-all-btn-span">&nbsp;Skills</span>
        </button>

        <button
          onClick={() => handleActive("projects")}
          className={`projects-btn ${active === "projects" ? "active" : ""}`}
        >
          <i class="fa-solid fa-laptop-code"></i> <span className="about-all-btn-span">&nbsp;Projects</span>
        </button>

        <button
          onClick={() => handleActive("certifications")}
          className={`certifications-btn ${
            active === "certifications" ? "active" : ""
          }`}
        >
          <i class="fa-solid fa-award"></i> <span className="about-all-btn-span">&nbsp;Certifications</span>
        </button>
      </div>

      {showAbout && <About />}
      {showSkills && <Skills />}
      {showProjects && <Projects />}
      {showCertifications && <Certifications />}
    </section>
  );
}
