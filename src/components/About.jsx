import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sliderImg } from "../data/slider";
import ImageSlider from "./ImageSlider";
import './../styles/about.css';

export default function About() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

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
    </section>
  );
}