import React from 'react';
import '../static/style.css';
import {useTranslation} from "react-i18next";




const SectionHeader = () => {
    const [t, ] = useTranslation('translation');

    return <div id="hero-banner">
        <section id="hero-banner">
            <h1>{t("main_title")}</h1>
            <a className="scroll" href="#about-us">
                <img src="/icons/arrow_icon.svg" alt="arrow down icon"/>
            </a>
        </section>
    </div>
}
export default  SectionHeader