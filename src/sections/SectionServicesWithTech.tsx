import * as React from 'react';
import {useTranslation} from "react-i18next";
import '../static/style.css';
import {Avatar, Grid} from "@mui/material";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import {services} from "../const/const_services";
import {Service, ServiceTechnologyBlock} from "../types/card_services";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Root = styled('div')(({theme}) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export interface InterfaceTabPanelProps {
    index: number
    service: Service
    value: number
}

const ServiceBlock = (props: ServiceTechnologyBlock) => {
    const [t,] = useTranslation('translation');
    const [descriptionTech, setDescriptionTech] = React.useState<string>("");

    return (<React.Fragment>
        <Divider textAlign={props.textAlign}>
            {props.isChip ? <Chip label={t(props.keyTitleBlock)}/> : t(props.keyTitleBlock)}
        </Divider>
        <Grid container spacing={3}>
            {props.technologies?.map((technology, index) => (
                <Grid item key={`service_block_${props.keyTitleBlock}_${index}`}>
                    <Badge
                        color="success"
                        badgeContent={2}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <Badge badgeContent={technology?.badgeTechnology || 0} color="primary">
                            <Avatar
                                alt={technology?.altText ? technology.altText : technology?.titleTechnology ? technology.titleTechnology : ""}
                                src={technology.imgTechnology}
                                variant="rounded"
                                sx={{width: 56, height: 56}}
                                onMouseOver={() => {
                                    setDescriptionTech(t(technology.keyDescriptionTechnology))
                                }}
                                onMouseOut={() => {
                                    setDescriptionTech("")
                                }}

                            />
                        </Badge>
                    </Badge>
                </Grid>
            ))}
        </Grid>
        <Typography variant="overline" display="block" gutterBottom>
            {descriptionTech}
        </Typography>
    </React.Fragment>)


}

const BlockFullInfoAboutConcreteService = (props: InterfaceTabPanelProps) => {
    const [t,] = useTranslation('translation');

    return (<TabPanel value={props.value} index={props.index}>
            {t(props.service.keyTextService)}
            <Root>
                {props.service.serviceBlocks.map((serviceBlock, index) => (
                    <ServiceBlock
                        {...serviceBlock}
                        key={`tech_${props.service.keyTextService}_${index}`}/>))}
            </Root>

        </TabPanel>
    )
}


const SectionServicesWithTech = () => {
    const [t,] = useTranslation('translation');
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleMouseOver = (event: React.MouseEvent) => {
        /* @ts-ignore */
        const val = Number(event.currentTarget.id.split("-").at(-1))
        setValue(val);
    }


    return <section id="services">
        <h2>{t("competencies")}</h2>
        <div className="grid-wrapper">
            <Box sx={{width: '100%', typography: 'body1'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
                        {services.map((service, index) => (
                            <Tab
                                label={t(service.keyTitleService)}
                                onMouseOver={handleMouseOver}
                                key={`{tab_service_${service.keyTitleService}_${index}`}
                                {...a11yProps(index)}

                            />
                        ))}

                    </Tabs>
                </Box>
                {services.map((service, index) => (
                    <BlockFullInfoAboutConcreteService index={index} service={service} value={value}
                                                       key={`${service.keyTitleService}_${index}`}/>))}


            </Box>
        </div>

    </section>
}

export default SectionServicesWithTech