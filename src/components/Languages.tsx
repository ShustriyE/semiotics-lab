import * as React from 'react';
import {useTranslation} from 'react-i18next';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Languages = () => {

    const [_, i18n] = useTranslation('translation');
    return (
        <Stack direction="row" spacing={0}>
            <Button size="small" color="inherit" onClick={() => {
                i18n.changeLanguage('ua');
                localStorage.setItem('language', 'ua')
            }}>ua</Button>
            <Button size="small" color="inherit"
                    onClick={() => {
                        i18n.changeLanguage('en');
                        localStorage.setItem('language', 'en')
                    }}>en</Button>
            <Button size="small" color="inherit" onClick={() => {
                i18n.changeLanguage('ru');
                localStorage.setItem('language', 'ru')
            }}>ru</Button>
        </Stack>
    )
}

export default Languages