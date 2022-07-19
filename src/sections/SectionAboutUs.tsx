import * as React from "react";
import { useTranslation } from "react-i18next";
import "../static/style.css";

const SectionService = () => {
  const [t] = useTranslation("translation");

  return (
    <section id="aboutUs">
      <h2 className="aboutUs--ttl">{t("about us")}</h2>
      <p className="aboutUs--p sections--decription">{t("about_us_text")}</p>
      <div className="grid-wrapper">
        <div className="grid-container three-column">
          <div className="aboutUs--column">
            <div className="column--ttl-block">
              <figure>
                <img
                  src="/competentions/icon_1.png"
                  width="90%"
                  alt="troubleshooting"
                  className="column--image"
                />
              </figure>
              <h3 className="column--ttl">{t("services_left_competencies_title")}</h3>
            </div>
            <p className="column--p">{t("services_left_competencies_text")}</p>
          </div>
          <div className="aboutUs--column">
            <div className="column--ttl-block">
              <figure>
                <img
                  src="/competentions/icon_2.png"
                  width="90%"
                  alt="troubleshooting"
                  className="column--image"
                />
              </figure>
              <h3 className="column--ttl">{t("services_center_competencies_title")}</h3>
            </div>
            <p className="column--p">{t("services_center_competencies_text")}</p>
          </div>
          <div className="aboutUs--column">
            <div className="column--ttl-block">
              <figure>
                <img
                  src="/competentions/icon_3.png"
                  width="90%"
                  alt="troubleshooting"
                  className="column--image"
                />
              </figure>
              <h3 className="column--ttl">{t("services_right_competencies_title")}</h3>
            </div>
            <p className="column--p">{t("services_right_competencies_text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionService;
