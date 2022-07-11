import * as React from 'react';
import {useTranslation} from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {LanguageContext} from "../context/LanguageContext";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {makeStyles} from "@mui/material";

const MyArrowDropDown = (props: any) => {
    return <ArrowDropDownIcon {...props} style={{ color: 'white' }}/>
}
// const useStyles = makeStyles({
//     select: {
//         '&:before': {
//             borderColor: 'white',
//         },
//         '&:after': {
//             borderColor: 'white',
//         },
//         '&:not(.Mui-disabled):hover::before': {
//             borderColor: 'white',
//         },
//     },
//     icon: {
//         fill: 'white',
//     },
//     root: {
//         color: 'white',
//     },
// })

const LanguagesSelector = () => {
    /*@ts-ignore*/

    // const classes = useStyles()

    const translations = React.useContext(LanguageContext);
    /*@ts-ignore*/
    // const ddnSt = dropdownStyles();
    const [, i18n] = useTranslation('translation');
    const [language, setLanguage] = React.useState<string | null>(translations.srcLanguage);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    if (!language) {
        setLanguage('en')
        translations.setSrcLanguage("en")
    }

    const handleChange = (event: SelectChangeEvent) => {
        // setLanguage(event.target.value as string);
        const current_language: string = event.target.value as string
        i18n.changeLanguage(current_language);
        translations.setSrcLanguage(current_language)
        setLanguage(current_language)
    };
    const handleScroll = () => {
        setIsOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return (<FormControl variant="standard" sx={{m: 1,}}>
        <Select
            open={isOpen}
            value={language as string}
            onChange={handleChange}
            // color="success"
            // sx={{color: 'white', borderColor:"white", border: 1, borderRadius:2,  fontSize: 12}}
            sx={{color: "white", icon: {fill: "white"}}}
            // className={classes.select}
            inputProps={{
                classes: {
                    icon: {color: "white",},
                },
            }}
            // /*@ts-ignore */
            IconComponent={MyArrowDropDown}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
            // className={classes.select}
            // /*@ts-ignore */
            // disableScrollLock={true}
            /*@ts-ignore */
            MenuProps={{disableScrollLock: true}}
            /*@ts-ignore */
            // InputProps={{ style: { fontSize: 40 } }}
            // InputProps={{disableUnderline: true, disableScrollLock: true, MenuProps: {disableScrollLock: true}}}
            // InputProps={{disableUnderline: true}}
            // className={ddnSt.underline}
        >
            <MenuItem value={"en"}>en</MenuItem>
            <MenuItem value={"ru"}>ru</MenuItem>
            <MenuItem value={"ua"}>ua</MenuItem>
        </Select>
    </FormControl>)

}

export default LanguagesSelector