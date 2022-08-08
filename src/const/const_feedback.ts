export interface FeedbackStructure {
    nameReviewer: string;
    feedback: string;
    positionReviewer: string;
    pathToImg: string;
    pathToLogoCompanyReviewer: string;
    width?: number

}

export const feedbacks: FeedbackStructure[] = [
    {
        nameReviewer: 'slaviogloReviewer_1',
        positionReviewer: 'slaviogloPosition_1',
        feedback: 'slaviogloFeedback_1',
        pathToImg: '/feedbackers/Slavioglo_Ivan.png',
        pathToLogoCompanyReviewer: '/feedback/Fozzy_Temabit.png'
    },
    {
        nameReviewer: 'slaviogloReviewer_2',
        positionReviewer: 'slaviogloPosition_2',
        feedback: 'slaviogloFeedback_2',
        pathToImg: '/feedbackers/Bonazzi_Lidiia.png',
        pathToLogoCompanyReviewer: '/feedback/Fora.png'
    },
    {
        nameReviewer: 'slaviogloReviewer_3',
        positionReviewer: 'slaviogloPosition_3',
        feedback: 'slaviogloFeedback_3',
        pathToImg: '/feedbackers/Kuzmenko_Andriy.png',
        pathToLogoCompanyReviewer: '/feedback/Silpo.png'
    },
    {
        nameReviewer: 'slaviogloReviewer_4',
        positionReviewer: 'slaviogloPosition_4',
        feedback: 'slaviogloFeedback_4',
        pathToImg: '/feedbackers/Ievgen_Iosifov.png',
        pathToLogoCompanyReviewer: '/feedback/Ender_Turing.png'
    },
]