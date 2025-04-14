import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import logoBlack from './../assets/images/logo-black.png';
import logoWhite from './../assets/images/logo-white.png';
import hamburgerWhite from './../assets/images/hamburger-white.png';
import hamburgerBlack from './../assets/images/hamburger-black.png';
import DarkModeToggle from "./DarkModeToggle";
import "./../styles/navbar.css";

export default function Navbar() {
  const { isDarkMode } = useDarkMode();

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <img
            className="logo"
            src={isDarkMode ? logoWhite : logoBlack}
            alt="logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <img
            className="navbar-toggler-icon"
            src={isDarkMode ? hamburgerWhite : hamburgerBlack}
            alt="hamburger-icon"
          />
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-all">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-outline-light"
                to="/cv-viewer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-file-pdf"></i>&nbsp;View CV 
              </Link>
            </li>
          </ul>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
