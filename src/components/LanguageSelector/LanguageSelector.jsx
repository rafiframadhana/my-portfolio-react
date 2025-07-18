import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import idFlag from "../../assets/id.svg";
import gbFlag from "../../assets/gb.svg";
import Tooltip from "@mui/material/Tooltip";
import "./language-selector.css";

const languages = [
  { code: "en", flag: gbFlag, name: "English" },
  { code: "id", flag: idFlag, name: "Indonesian" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(i18n.language.split("-")[0] || "en");
  const selectedLang =
    languages.find((l) => l.code === selected) || languages[0];

  const toggleOpen = () => setOpen(!open);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelected(code);
    setOpen(false);
  };

  return (
    <div className="flag-selector-container">
      <Tooltip title="Select Language" placement="left" arrow>
        <div className="flagButton" onClick={toggleOpen}>
          <img
            src={selectedLang.flag}
            alt={selectedLang.code}
            className="flagImage"
          />
        </div>
      </Tooltip>
      {open && (
        <div className="flag-selector-dropdown">
          {languages.map(({ code, flag, name }) => (
            <Tooltip title={name} placement="right" arrow>
              <div
                key={code}
                onClick={() => changeLanguage(code)}
                className={`flag-selector-option ${
                  selected === code ? "optionSelected" : ""
                }`}
              >
                <img
                  src={flag}
                  alt={code}
                  className="flag-selector-optionImage"
                />
              </div>
            </Tooltip>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
