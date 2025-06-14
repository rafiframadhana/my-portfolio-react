import { useRef, useState } from "react";
import { certifications } from "../data/certificates";
import { motion, useInView } from "framer-motion";
import Modal from "./Modal.jsx";
import "./../styles/certifications.css";
import LazyImage from "./LazyImage.jsx";
import useWindowSize from "./../hooks/useWindowSize.jsx";
import { useTranslation } from "react-i18next";
import ShinyText from "./ShinyText.jsx";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { width } = useWindowSize();
  const { t } = useTranslation();

  // Determine initial count based on screen size
  const getInitialCount = () => {
    if (width > 1249) return 3;
    if (width >= 481 && width <= 1022) return 4;
    return 3;
  };

  const initialCount = getInitialCount();

  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, initialCount);

  const handleCertClick = (cert, e) => {
    e.preventDefault();
    setSelectedCert(cert);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
      },
    },
  };

  return (
    <section id="certifications" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={
          isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ShinyText
          text={t("title-certifications")}
          disabled={false}
          speed={2}
        />
      </motion.h2>

      <motion.div
        className="certifications-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
      >
        {visibleCertifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            variants={cardVariants}
          >
            <motion.a
              href={cert.link}
              onClick={(e) => handleCertClick(cert, e)}
              className="card-link"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <LazyImage
                src={cert.img}
                alt={cert.title}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="card-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </motion.div>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
      {certifications.length > initialCount && (
        <motion.button
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05, opacity: 0.7 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1.3rem",
            backgroundColor: "var(--button-bg)",
            color: "var(--button-text)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            display: "block",
            margin: "2rem auto",
          }}
        >
          {showAll ? (
            <>
              {t("show-less")}&nbsp;<i className="fa-solid fa-angle-up"></i>
            </>
          ) : (
            <>
              {t("show-more")}&nbsp;<i className="fa-solid fa-angle-down"> </i>
            </>
          )}
        </motion.button>
      )}

      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "100%",
              maxHeight: "100%",
              overflow: "hidden",
            }}
          >
            <LazyImage
              src={selectedCert.img}
              alt={selectedCert.title}
              style={{
                maxWidth: "100%",
                maxHeight: "100vh",
                marginBottom: "1rem",
                objectFit: "contain",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <motion.a
              href={selectedCert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, opacity: 0.7 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: "20px",
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "var(--button-bg)",
                color: "var(--button-text)",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              View Original
            </motion.a>
          </div>
        )}
      </Modal>
    </section>
  );
}
