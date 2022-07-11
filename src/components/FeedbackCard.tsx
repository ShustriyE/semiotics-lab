import React from 'react';
import {FeedbackStructure} from "../const/const_feedback";
import Card from '@mui/material/Card';
import {Avatar, Box, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const FeedbackCard = (props: FeedbackStructure) => {
    const [t,] = useTranslation('translation');
    console.log('width', props.width)
    let height = (props?.width ? props.width * 0.25 : 150)
    if (height > 300){
        height = 300
    }


    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{width: '80%', marginLeft: '10%', marginRight: "10%"}}>
                <Card>
                    <Grid container>
                        <Grid item>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height={height}
                                    image={props.pathToImg}
                                    alt={t(props.nameReviewer)}/>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 345}}>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {t(props.feedback)}
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {t(props.nameReviewer)}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {t(props.positionReviewer)}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Avatar
                                                alt={t((props.nameReviewer))}
                                                src={props.pathToLogoCompanyReviewer}
                                                sx={{width: 56, height: 56}}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Box>)


}
export default FeedbackCard;