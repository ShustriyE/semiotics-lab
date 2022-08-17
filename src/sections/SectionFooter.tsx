import React from "react";
import copy from "clipboard-copy";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import "../static/style.css";

const SectionFooter = () => {
  const [t] = useTranslation("translation");

  const copyText = (text: string | undefined) => {
    if (text) {
      copy(text);
    }
  };
  const contact_email: string = "info@semiotics-lab.com";
  const contact_phone: string = "+380666046423";

  return (
    <footer>
      <div id="footer">
        <div className="footer--left">
          <img src="/icons/logo_colored.svg" alt="" />
        </div>
        <div className="footer--center">
          <div className="footer--center-container">
            <span className="center--container-header">
              {t("contact_phone")}
            </span>
            <a
              href="tel:+380666046423"
              className="center--container-phone"
              onClick={() => {
                copyText(contact_phone);
              }}
            >
              {contact_phone}
            </a>
            <span className="center--container-header">
              {t("contact_email")}
            </span>
            <a
              href="mailto:info@semiotics-lab.com"
              className="center--container-email"
              onClick={() => {
                copyText(contact_email);
              }}
            >
              {contact_email}
            </a>
            <span className="center--container-header">
              {t("contact_adress_title")}
            </span>
            <a
              href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%D1%81%D1%8C%D0%BA%D0%B0,+18,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.44542,30.5297598,17z/data=!4m5!3m4!1s0x40d4cfacb6c2d3c7:0x6ca1da62cf62c8b6!8m2!3d50.44542!4d30.5319485"
              target="_blank"
              rel="noreferrer"
              className="center--container-adress"
            >
              {t("contact_adress_descr")}
            </a>
          </div>
        </div>
        <div className="footer--right">
          <span className="footer--right-text">
          {t("copywriting_text")}
          </span>
          <p className="footer--right-copywriting">
          {t("copywriting")}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default SectionFooter;
