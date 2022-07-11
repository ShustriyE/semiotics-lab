import React from 'react';

export interface InterfaceLanguageContext {
    srcLanguage: string
    setSrcLanguage: Function
}


const getSrcLanguage = (): string => {
    const val = localStorage.getItem('language') || 'en'
    return val === 'null' ? 'en' : val;
}

export const baseSettingsLanguage: InterfaceLanguageContext = {
    srcLanguage: getSrcLanguage(),
    setSrcLanguage: (newSrcLanguage: string) => {
        localStorage.setItem('language', newSrcLanguage);
    },
}

export const LanguageContext = React.createContext<InterfaceLanguageContext>(baseSettingsLanguage);