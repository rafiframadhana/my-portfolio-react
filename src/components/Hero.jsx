import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import profileDarkMode from './../assets/images/profile-orange-bg.png';
import profileLightMode from './../assets/images/profile-blue-bg.png';
import linkedinIcon from "./../assets/images/icon/linkedin-icon.png";
import githubIcon from "./../assets/images/icon/github-icon.png";
import emailIcon from "./../assets/images/icon/email-icon.png";
import phoneIcon from "./../assets/images/icon/phone-icon.png";
import CustomTooltip from "./CustomTooltip";
import LazyImage from "./LazyImage";
import "./../styles/hero.css";

export default function Hero() {
  const { isDarkMode } = useDarkMode()

  return (
    <header id="hero">
      <div className="hero-text-img">
        <motion.div
          className="profile-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="profile-greet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          ></motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span>Hi, I'm </span>Rafif Ramadhana
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Software <span>Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Focused on building efficient, scalable, and user-friendly
            applications. Specializing in modern web technologies to create
            seamless digital experiences.
          </motion.p>
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            {[
              {
                href: "https://www.linkedin.com/in/rafif-ramadhana-230603250/",
                src: linkedinIcon,
                alt: "LinkedIn",
              },
              {
                href: "https://github.com/rafiframadhana",
                src: githubIcon,
                alt: "GitHub",
              },
              {
                href: "mailto:rafiframadhana.cs@gmail.com",
                src: emailIcon,
                alt: "Email",
              },
              { href: "tel:+6281292545497", src: phoneIcon, alt: "Phone" },
            ].map((link, index) => (
              <CustomTooltip key={link.alt} title={link.alt}>
                <motion.a
                  href={link.href}
                  target={
                    link.alt === "LinkedIn" || link.alt === "GitHub"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.alt === "LinkedIn" || link.alt === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <img
                    src={link.src}
                    alt={link.alt}
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </motion.a>
              </CustomTooltip>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="profile-img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <LazyImage
              src={isDarkMode ? profileDarkMode : profileLightMode}
              alt="Rafif's Profile Picture"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
