import React from 'react'
import {useTranslation} from "react-i18next";
import Carousel from 'react-material-ui-carousel'
import {Box} from '@mui/material'
import FeedbackCard from "../components/FeedbackCard";
import {feedbacks} from "../const/const_feedback";

const SectionFeedback = () => {
    const [t,] = useTranslation('translation');
    const [width, setWidth] = React.useState<number>(0)
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
            // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
    })
    let percent = 100
    if (width < 1000) {
        percent = 100
    } else {
        percent = 70
    }
    const margin = (100 - percent) / 2

    return (
        <section id="feedback">
            <Box sx={{width: '100%'}}>
                <h2>{t("feedbackTitleBlock")}</h2>
                <Box sx={{width: `${percent}%`, marginLeft: `${margin}%`, marginRight: `${margin}%`,}}
                >
                    <Carousel>
                        {
                            feedbacks.map((feedback, i) => <FeedbackCard {...feedback} width={width}
                                                                         key={`feedback ${feedback.nameReviewer}`}/>)
                        }
                    </Carousel>
                </Box>

            </Box>
        </section>
    )

}

export default SectionFeedback;
