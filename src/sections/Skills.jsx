import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skills.jsx";
import "./../styles/skills.css";
import { useTranslation } from "react-i18next";
import ShinyText from "../components/ShinyText.jsx";

export default function Skills() {
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.1 });
  const { t } = useTranslation();

  return (
    <section ref={skillsRef} id="skills-container">
      <motion.div
        className="skills"
        initial={{ opacity: 0 }}
        animate={isSkillsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          ref={skillsRef}
          initial={{ opacity: 0, y: -50 }}
          animate={
            isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ShinyText text={t("title-skills")} disabled={false} speed={2} />
        </motion.h2>

        <motion.div
          className="skill-grid"
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: -50 }}
          animate={
            isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          {skills.map((section, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <div className="icon">{section.icon}</div>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: boldCategory(section.title),
                  }}
                />
              </div>
              <div className="skill-items">
                {section.items.map((item, idx) => (
                  <a
                    className="skill-badge"
                    key={idx}
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="skill-icon"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function boldCategory(title) {
  const [first, ...rest] = title.split(" ");
  return `<strong>${first}</strong> ${rest.join(" ")}`;
}
