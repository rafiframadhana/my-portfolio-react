import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sliderImg } from "../data/slider";
import ImageSlider from "./ImageSlider";
import './../styles/about.css';
import { useTranslation } from 'react-i18next'
import ShinyText from "./ShinyText";

export default function About() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const { t } = useTranslation()

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
          <ShinyText text={t('title-about-me')} disabled={false} speed={2} />     
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
            {t('about-me')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}