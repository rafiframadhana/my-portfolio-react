import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import AboutAll from "./sections/AboutAll.jsx";
import Footer from "./sections/Footer.jsx";
import CVViewer from "./components/CvViewer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CVViewerPics from "./components/CvViewerPics.jsx";
import ChatbotWidget from "./components/ChatBotWidget/ChatBotWidget.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { useDarkMode } from "./context/DarkModeContext.jsx";
import { AuroraBackground } from "./components/AuroraBg/AuroraBg.jsx";
// import SpaceBackground from "./components/MoonBg/Space.jsx";
import { motion } from "framer-motion";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {isDarkMode && <AuroraBackground>
                <motion.div
                  initial={{ opacity: 0.0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="content-container"
                >
                  <Hero />
                </motion.div>
              </AuroraBackground>}

              {!isDarkMode && <Hero />}
              <AboutAll />
              <Footer />
              <ChatbotWidget />
              <ScrollToTop />
            </>
          }
        />
        <Route path="/cv-viewer" element={<CVViewer />} />
        <Route path="/cv-viewer-pics" element={<CVViewerPics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
