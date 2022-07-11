import React from 'react';
import '../static/style.css';
import copy from "clipboard-copy";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";




const SectionFooter = () => {
    const [t,] = useTranslation('translation');

    const copyText = (text: string | undefined) => {
        if (text) {
            copy(text)
        }
    }
    const contact_email: string = "basil.potseluev@semiotics-lab.com"
    const contact_phone: string = "+380 66 604 64 23"

    return <footer>
        <div className="half left">
            <img src="/icons/logo_colored.svg" alt="" width="120%"/>
        </div>
        <div className="contact-us">
            <Button onClick={() => {
                copyText(contact_email)
            }} sx={{color: 'black'}}>
                <Typography variant="overline">

                    {contact_email}
                </Typography>
            </Button>
            <Button onClick={() => {
                copyText(contact_phone)
            }}
                    sx={{color: 'black'}}>
                <Typography variant="overline">
                    {contact_phone}
                </Typography>
            </Button>
            {/*<Button onClick={() => {*/}
            {/*    copyText(contact_phone)*/}
            {/*}}>*/}
            {/*    <ContentCopyOutlinedIcon/>*/}
            {/*</Button>*/}
        </div>
        <div className="half right">
            <Typography variant="caption" display="block" gutterBottom>
                {t("copyrights_text")}
            </Typography>
            {/*<p>The text and graphic content of the website belongs to Semiotics Lab and cannot be used by other*/}
            {/*    resources without our permission and without the link to the source.</p>*/}
            <p className="copyrights">© Semiotics Lab {new Date().getFullYear()}</p>
        </div>
    </footer>
}
export default SectionFooter