import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { useTranslation } from "react-i18next";
// import profileDarkMode from "./../assets/images/profile-lightgray-bg.png";
// import profileLightMode from "./../assets/images/profile-blue-bg.png";
import linkedinIcon from "./../assets/images/icon/linkedin-icon.png";
import githubIcon from "./../assets/images/icon/github-icon.png";
import emailIcon from "./../assets/images/icon/email-icon.png";
import instagramIcon from "./../assets/images/icon/instagram-icon.png";
// import phoneIcon from "./../assets/images/icon/phone-icon.png";
import CustomTooltip from "./CustomTooltip";
import LazyImage from "./LazyImage";
import "./../styles/hero.css";
// import { useState } from "react";
import ShinyText from "./ShinyText";
import Lanyard from "./Lanyard/Lanyard";

export default function Hero() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  // const [imageLoading, setImageLoading] = useState(true);

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
            <span>{t("greetings")} </span>
            <ShinyText text="Rafif Ramadhana" disabled={false} speed={2} />
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Software{" "}
            <span>
              <ShinyText text="Engineer" disabled={false} speed={2} />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {t("motto")}
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
                href: "https://www.instagram.com/rafiframadhanaa/profilecard/?igsh=cXBtNm41c2toNmxw",
                src: instagramIcon,
                alt: "Instagram",
              },
              {
                href: "mailto:rafiframadhana.cs@gmail.com",
                src: emailIcon,
                alt: "Email",
              },
            ].map((link, index) => (
              <CustomTooltip key={link.alt} title={link.alt}>
                <motion.a
                  href={link.href}
                  target={
                    link.alt === "LinkedIn" ||
                    link.alt === "GitHub" ||
                    link.alt === "Instagram"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.alt === "LinkedIn" ||
                    link.alt === "GitHub" ||
                    link.alt === "Instagram"
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
        {/* <motion.div
          className="profile-img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {imageLoading && (
              <div className="hero-loader">
                <div className="hero-loader-dots" />
              </div>
            )}
            <a href="https://github.com/rafiframadhana" target="_blank">
              <img
                src={isDarkMode ? profileDarkMode : profileLightMode}
                alt="Rafif's Profile Picture"
                style={{
                  display: imageLoading ? "none" : "block",
                  transition: "opacity 0.3s ease",
                }}
                onLoad={() => setImageLoading(false)}
              />
            </a>
          </motion.div>
        </motion.div> */}

        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
      </div>
    </header>
  );
}
