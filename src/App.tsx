import React from 'react';
import './App.css';

import {baseSettingsLanguage, LanguageContext} from "./context/LanguageContext";
import {CssBaseline} from "@mui/material";
import Page from "./page/Page";

function App() {

    return (
        <React.Fragment>
            <CssBaseline/>
            {/* @ts-ignore */}
            <LanguageContext.Provider value={baseSettingsLanguage}>
                <Page/>
            </LanguageContext.Provider>
        </React.Fragment>
    );
}

export default App;
