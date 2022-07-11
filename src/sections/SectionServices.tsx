import * as React from 'react';
import {useTranslation} from "react-i18next";
import '../static/style.css';

const SectionService = () => {
    const [t,] = useTranslation('translation');

    return <section id="services">
        <h2>{t("competencies")}</h2>
        <div className="grid-wrapper">
            <div className="grid-container three-column">
                <div className="left column">
                    <figure>
                        <img src="/competentions/icon_1.png" width="90%" alt="troubleshooting"/>
                    </figure>
                    <h3>{t("services_left_competencies_title")}</h3>
                    <p>{t("services_left_competencies_text")}</p>
                </div>
                <div className="middle column">
                    <figure>
                        <img src="/competentions/icon_2.png" width="90%" alt="troubleshooting"/>
                    </figure>
                    <h3>{t("services_center_competencies_title")}</h3>
                    <p>{t("services_center_competencies_text")}</p>
                </div>
                <div className="right column">
                    <figure>
                        <img src="/competentions/icon_3.png" width="90%" alt="troubleshooting"/>
                    </figure>
                    <h3>{t("services_right_competencies_title")}</h3>
                    <p>{t("services_right_competencies_text")}</p>
                </div>
            </div>
        </div>

    </section>
}

export default SectionService