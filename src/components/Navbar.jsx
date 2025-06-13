import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";
import "./../styles/navbar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ShinyText from './ShinyText.jsx';
export default function Navbar() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="logo-name">
            <ShinyText text="© Rafif R." disabled={false} speed={1.5} className={`logo-text ${isDarkMode? "dark-mode" : "light-mode"}`} />
            
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={handleToggle}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <CloseIcon
              sx={{
                color: isDarkMode ? "white" : "black",
                fontSize: 40,
              }}
            />
          ) : (
            <MenuIcon
              sx={{
                color: isDarkMode ? "white" : "black",
                fontSize: 40,
              }}
            />
          )}
        </button>

        <div
          className={`collapse navbar-collapse justify-content-between ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={handleToggle} href="/">
                {t("nav-home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleToggle} href="#about-all">
                {t("nav-about")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleToggle} href="#contact">
                {t("nav-contact")}
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-outline-light"
                to="/cv-viewer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleToggle}
              >
                <i className="fa-solid fa-file-pdf"></i>&nbsp;{t("nav-view-cv")}
              </Link>
            </li>
          </ul>

          <LanguageSelector />
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
