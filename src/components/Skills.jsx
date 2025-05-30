import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skills";
import './../styles/skills.css';
import { useTranslation } from 'react-i18next'

export default function Skills() {
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.2 });
  const { t } = useTranslation()

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
    <div ref={skillsRef} id="skills-container">
      <motion.div
        className="skills"
        initial={{ opacity: 0 }}
        animate={isSkillsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={
            isSkillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
          }
          transition={{ duration: 0.6 }}
        >
          {t('title-skills')}
        </motion.h2>

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
              <a href={skill.site} target="_blank"><img src={skill.icon} alt={skill.name} loading="lazy" /></a>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}