import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skills";
import { sliderImg } from "../data/slider";
import ImageSlider from "./ImageSlider";
import './../styles/about.css';

export default function About() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.3,
        bounce: 0.2,
      },
    },
  };

  return (
    <section id="about">
      <div ref={aboutRef} className="about-title-detail">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={
            isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <div className="about-detail">
          <ImageSlider images={sliderImg} />

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            I am a Computer Science graduate from the University of Lucknow,
            specializing in web development. Skilled in React.js, Next.js,
            Redux Toolkit, Zustand, Tailwind CSS, and API integration, I build
            scalable and user-friendly web applications. With experience in
            e-commerce platforms, AI-powered projects, and unit testing using
            Jasmine, I am passionate about innovation and creating seamless
            digital experiences.
          </motion.p>
        </div>
      </div>

      <div ref={skillsRef} id="skills-container">
        <motion.div
          className="skills"
          initial={{ opacity: 0 }}
          animate={isSkillsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={
              isSkillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.6 }}
          >
            Technologies & Skills
          </motion.h3>

          <motion.div
            className="skills-icons"
            variants={containerVariants}
            initial="hidden"
            animate={isSkillsInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill"
                variants={skillVariants}
              >
                <img src={skill.icon} alt={skill.name} loading="lazy" />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
