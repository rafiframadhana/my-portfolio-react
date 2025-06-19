import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import AboutAll from "./sections/AboutAll.jsx";
import Footer from "./sections/Footer.jsx";
import CVViewer from "./components/CvViewer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import CVViewerPics from "./components/CvViewerPics.jsx";
import ChatbotWidget from "./components/ChatBotWidget/ChatBotWidget.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
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
    </DarkModeProvider>
  );
}

export default App;
