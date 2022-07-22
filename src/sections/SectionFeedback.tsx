import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import FeedbackCard from "../components/FeedbackCard";
import { feedbacks } from "../const/const_feedback";
import { ClassNames } from "@emotion/react";
import "../static/style.css";

const SectionFeedback = () => {
  const [t] = useTranslation("translation");
  const [width, setWidth] = React.useState<number>(0);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }

    window.addEventListener("resize", handleResize);
  });
  let percent = 60;
  if (width < 912) {
    percent = 100;
  } else {
    percent = 60;
  }
  const margin = (100 - percent) / 2;

  return (
    <section id="feedback">
      <Box sx={{ width: "100%" }}>
        <div className="sections--header-box">
          <h2 className="feedback--ttl sections--header">
            {t("feedbackTitleBlock")}
          </h2>
          <p className="feedback--p sections--decription">
            {t("feedbackDescrBlock")}
          </p>
        </div>
        <Box
          sx={{
            width: `${percent}%`,
            marginLeft: `${margin}%`,
            marginRight: `${margin}%`,
          }}
        >
          <Carousel
            navButtonsAlwaysVisible={true}
            className="carousel--elem"
            navButtonsWrapperProps={{
              style: {
                position: "absolute",
                height: "6vw",
                backgroundColor: "transparent",
                top: "calc(50% - 5vw)",
              },
            }}
            navButtonsProps={{
              style: {
                backgroundColor: "#FFFFFF",
                border: "0.1vw solid #DBDBDB",
                color: "#969696",
                boxShadow:
                  "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 2px 1px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.04)",
              },
            }}
            indicatorIconButtonProps={{
              style: {
                color: "#DBDBDB",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#FF8364",
              },
            }}
            indicatorContainerProps={{
              style: {
                marginTop: "2.6vw",
              },
            }}
          >
            {feedbacks.map((feedback, i) => (
              <FeedbackCard
                {...feedback}
                width={width}
                key={`feedback ${feedback.nameReviewer}`}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </section>
  );
};

export default SectionFeedback;
