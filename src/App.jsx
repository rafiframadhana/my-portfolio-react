import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutAll from "./components/AboutAll.jsx";
import Footer from "./components/Footer.jsx";
import CVViewer from "./components/CvViewer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import CVViewerPics from "./components/CvViewerPics.jsx";
import ChatbotWidget from "./components/ChatBotWidget.jsx";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ChatbotWidget />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <AboutAll />
                <Footer />
                <ScrollToTop />
              </>
            }
          />
          <Route path="/cv-viewer" element={<CVViewer />} />
          <Route path="/cv-viewer-pics" element={<CVViewerPics />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
