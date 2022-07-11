import React from 'react';
import '../static/style.css';
import {useTranslation} from "react-i18next";
import {Box, Button, Link} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const SectionAboutUs = () => {
    const [t,] = useTranslation('translation');

    return <section id="about-us">
        <h2>{t("about us")}</h2>
        <p>{t("about_us_text")}</p>
        <Box display="flex"
             alignItems="center"
             justifyContent="center"
        >
            <Link href="#contact-us" underline="none">
                <Button variant="contained"
                        color="secondary"
                        endIcon={<EmailRoundedIcon/>}>
                    Write to us</Button>
            </Link>
        </Box>

    </section>
}
export default SectionAboutUs