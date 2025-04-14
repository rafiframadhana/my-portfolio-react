import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutAll from "./components/AboutAll.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CVViewer from "./components/CvViewer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

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
                <Contact />
                <Footer />
                <ScrollToTop />
              </>
            }
          />
          <Route path="/cv-viewer" element={<CVViewer />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
