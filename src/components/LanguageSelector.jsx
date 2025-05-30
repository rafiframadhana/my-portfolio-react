import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import idFlag from "../assets/id.svg";
import gbFlag from "../assets/gb.svg";
import "./../styles/language-selector.css";

const languages = [
  { code: "en", flag: gbFlag },
  { code: "id", flag: idFlag },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(i18n.language.split("-")[0] || "en");
  const selectedLang = languages.find((l) => l.code === selected) || languages[0];

  const toggleOpen = () => setOpen(!open);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelected(code);
    setOpen(false);
  };

  return (
    <div className="flag-selector-container">
      <div className="flagButton" onClick={toggleOpen}>
        <img
          src={selectedLang.flag}
          alt={selectedLang.code}
          className="flagImage"
        />
      </div>
      {open && (
        <div className="flag-selector-dropdown">
          {languages.map(({ code, flag }) => (
            <div
              key={code}
              onClick={() => changeLanguage(code)}
              className={`flag-selector-option ${selected === code ? "optionSelected" : ""}`}
            >
              <img src={flag} alt={code} className="flag-selector-optionImage" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
