import React from "react";
import "../static/style.css";
import { useTranslation } from "react-i18next";

const SectionHeader = () => {
  const [t] = useTranslation("translation");
  const handleClick = () => {
    document?.getElementById("contact-us")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="hero-banner">
      <section id="hero-section">
          <h1 className="hero-section-ttl">{t("main_title")}</h1>
          <span className="hero-section-par">{t("main_par")}</span>
          <div className="hero-section-btn--cb" onClick={handleClick}>
            <span>{t("main_btn")}</span>
            <img src="/icons/sms-btn_icon.svg" alt="#" />
          </div>
      </section>
        <a className="scroll" href="#aboutUs">
          <img src="/icons/arrow_icon.svg" alt="arrow down icon" />
        </a>
    </div>
  );
};
export default SectionHeader;
