import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Button, Link} from "@mui/material";
import LanguagesSelector from "./LanguageSelector";
import {useTranslation} from "react-i18next";
// import Popup from "./Popup";

export default function AppBarLending() {
    const [t,] = useTranslation('translation');
    const [countClick, setNewClick] = React.useState<number>(0)
    return (
        <React.Fragment>
            <CssBaseline/>
            {/*<HideOnScroll {...props}>*/}
            <AppBar position="absolute" style={{background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <img src={"/icons/logo_main.svg"} alt="logo" onClick={() => setNewClick(countClick + 1)}/>


                    <Box sx={{flexGrow: 1}}/>

                    <Link href="#about-us" underline="none" sx={{color: 'white'}}>
                        <Button sx={{color: 'white'}}>{t("about us")}</Button>
                    </Link>
                    <Link href="#services" underline="none" sx={{color: 'white'}}>
                        <Button sx={{color: 'white'}}>{t("competencies")}</Button>
                    </Link>
                    <Link href="#projects" underline="none" sx={{color: 'white'}}>
                        <Button sx={{color: 'white'}}>{t("projects")}</Button>
                    </Link>
                    <Link href="#team" underline="none" sx={{color: 'white'}}>
                        <Button sx={{color: 'white'}}>{t("team")}</Button>
                    </Link>
                    {/*<Languages/>*/}
                    <LanguagesSelector/>

                </Toolbar>
            </AppBar>
            {/*{countClick === 5 ? <Popup/> : <></>}*/}
            {/*</HideOnScroll>*/}

        </React.Fragment>
    );
}
