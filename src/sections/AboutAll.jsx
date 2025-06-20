import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Certifications from "./Certifications.jsx";
import Skills from "./Skills.jsx";
import "./../styles/about-all.css";
import { useTranslation } from 'react-i18next'

export default function AboutAll() {
  const [showAbout, setShowAbout] = useState(true);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [active, setActive] = useState("about");
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: true, amount: 0.2 });
  const { t } = useTranslation()

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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 1,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      opacity: 0.7,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section id="about-all">
      <div ref={buttonRef} className="about-all-button">
        <motion.button
          custom={0}
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => handleActive("about")}
          className={`about-btn ${active === "about" ? "active" : ""}`}
        >
          <i className="fa-solid fa-user"></i>
          <span className="about-all-btn-span">&nbsp;{t('btn-about')}</span>
        </motion.button>

        <motion.button
          custom={2}
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => handleActive("projects")}
          className={`projects-btn ${active === "projects" ? "active" : ""}`}
        >
          <i className="fa-solid fa-laptop-code"></i>
          <span className="about-all-btn-span">&nbsp;Projects</span>
        </motion.button>
        
        <motion.button
          custom={1}
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => handleActive("skills")}
          className={`skills-btn ${active === "skills" ? "active" : ""}`}
        >
          <i className="fa-solid fa-code"></i>
          <span className="about-all-btn-span">&nbsp;{t('btn-skills')}</span>
        </motion.button>


        <motion.button
          custom={3}
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => handleActive("certifications")}
          className={`certifications-btn ${
            active === "certifications" ? "active" : ""
          }`}
        >
          <i className="fa-solid fa-award"></i>
          <span className="about-all-btn-span">&nbsp;{t('btn-certifications')}</span>
        </motion.button>
      </div>

      {showAbout && <About />}
      {showProjects && <Projects />}
      {showSkills && <Skills />}
      {showCertifications && <Certifications />}
    </section>
  );
}
