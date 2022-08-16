import React from "react";
import { FeedbackStructure } from "../const/const_feedback";
import Card from "@mui/material/Card";
import { Avatar, Box, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const FeedbackCard = (props: FeedbackStructure) => {
  const [t] = useTranslation("translation");
  console.log("width", props.width);
  let height = props?.width ? props.width * 0.25 : 150;
  if (height > 700) {
    height = 700;
  }

  return (
    <Box className="feedback-card-box">
      <Box className="feedback-card-box-block">
        <Card className="feedback-body">
          <img src="/feedback/icon_quotes.svg" alt="#" />
          <Card className="feedback-box-text">
            <Typography
              variant="body2"
              color="text.secondary"
              className="feedback-text"
            >
              {t(props.feedback)}
            </Typography>
          </Card>
          <Card className="feedback-rewiever-block">
            <CardContent className="feedback-rewiever-block-min">
              <div className="feedback-rewiever-block-flex">
                <div>
                  <CardContent className="feedback-rewiever-block-padding">
                    <Grid container spacing={1} columns={2} wrap={"nowrap"}>
                      <Grid item>
                        <CardMedia
                          component="img"
                          height={height}
                          image={props.pathToImg}
                          alt={t(props.nameReviewer)}
                          className="feedback-rewiever-img"
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="feedback-rewiever-name"
                        >
                          {t(props.nameReviewer)}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          className="feedback-rewiever-position"
                        >
                          {t(props.positionReviewer)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </div>
                <div>
                  <Avatar
                    alt={t(props.nameReviewer)}
                    src={props.pathToLogoCompanyReviewer}
                    className="feedback-rewiever-logo"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </Card>
      </Box>
    </Box>
  );
};
export default FeedbackCard;
