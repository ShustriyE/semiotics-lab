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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "80%", marginLeft: "10%", marginRight: "10%" }}>
        <Card
          sx={{
            boxShadow: "none",
            border: "0.1vw solid #D8D8D8",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "2vw",
            gap: "1.1vw",
            borderRadius: "1vw",
          }}
        >
          <img src="/feedback/icon_quotes.svg" alt="#" />
          <Card sx={{ boxShadow: "none" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "1vw",
                lineHeight: "1.4vw",
                color: "#585757",
              }}
            >
              {t(props.feedback)}
            </Typography>
          </Card>
          <Card 
          sx={{ boxShadow: "none" }}
          style={{
            width: "100%",
          }}>
            <CardContent
              style={{
                padding: "0",
                width: "100%",
              }}
            >
              <div 
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <div>
                  <CardContent
                  style={{
                    padding: "0",
                  }}>
                    <Grid container spacing={1} columns={2} wrap={'nowrap'}>
                      <Grid item>
                        <CardMedia
                          component="img"
                          height={height}
                          image={props.pathToImg}
                          alt={t(props.nameReviewer)}
                          style={{
                            width: "2.6vw",
                            height: "2.6vw",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: "600",
                            fontSize: "1vw",
                            lineHeight: "1.5vw",
                            color: "#1C1C1C",
                          }}
                        >
                          {t(props.nameReviewer)}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: "400",
                            fontSize: "0.8vw",
                            lineHeight: "1.1vw",
                            color: "#969696",
                          }}
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
                    style={{
                      width: "4vw",
                      height: "auto",
                      borderRadius: "0",
                    }}
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
