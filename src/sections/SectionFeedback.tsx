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
  let percent = 90;
  if (width < 912) {
    percent = 100;
  } else {
    percent = 90;
  }
  const margin = (100 - percent) / 2;

  return (
    <section id="feedback">
      <Box sx={{ width: "100%" }}>
        <div className="sections--header-box">
          <h2 className="feedback--ttl sections--header">
            {t("feedbackTitleBlock")}
          </h2>
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
              className: "carousel--elem-navButtonsWrapperProps",
            }}
            navButtonsProps={{
              className: "carousel--elem-navButtonsProps",
            }}
            indicatorIconButtonProps={{
              className: "carousel--elem-indicatorIconButtonProps",
            }}
            activeIndicatorIconButtonProps={{
              className: "carousel--elem-activeIndicatorIconButtonProps",
            }}
            indicatorContainerProps={{
              className: "carousel--elem-indicatorContainerProps",
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
