import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import ShinyText from "./ShinyText";
import "./../styles/footer.css";

export default function Footer() {
  // return <footer>&copy; 2025 Rafif Ramadhana</footer>

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="contact-title">
        <ShinyText text={t("title-contact")} disabled={false} speed={2} />
      </motion.h2>

      <motion.a
        href="mailto:rafiframadhana.cs@gmail.com"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-envelope"></i> rafiframadhana.cs@gmail.com
      </motion.a>

      <motion.a
        href="https://www.instagram.com/rafiframadhanaa/profilecard/?igsh=cXBtNm41c2toNmxw"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fab fa-instagram"></i> Instagram
      </motion.a>

      <motion.a
        href="https://github.com/rafiframadhana"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fab fa-github"></i> GitHub
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/rafif-ramadhana-230603250/"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fab fa-linkedin"></i> LinkedIn
      </motion.a>

      <motion.footer variants={itemVariants}>
        &copy; 2025 Rafif Ramadhana
      </motion.footer>
    </motion.section>
  );
}
