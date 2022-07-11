import React from 'react';
import {useTranslation} from "react-i18next";
import LanguagesSelector from "./LanguageSelector";
// import Popup from "./Popup";


const AppBarCss = () => {
    const [t,] = useTranslation('translation');
    const [countClick, setNewClick] = React.useState<number>(0)

    return (<React.Fragment>
        <header>
            <img src={"/icons/logo_main.svg"} alt="logo" onClick={() => setNewClick(countClick + 1)}/>

            <nav>
                <a href="#about-us">{t("about us")}</a>
                <a href="#services">{t("competencies")}</a>
                <a href="#projects">{t("projects")}</a>
                <a href="#team">{t("team")}</a>
                <LanguagesSelector/>

            </nav>
        </header>
        {/*{countClick === 5 ? <Popup/> : <></>}*/}

    </React.Fragment>)
}
export default AppBarCss