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
        nameReviewer: 'slaviogloReviewer',
        positionReviewer: 'slaviogloPosition',
        feedback: 'slaviogloFeedback',
        pathToImg: '/feedbackers/Slavioglo_Ivan.png',
        pathToLogoCompanyReviewer: '/feedback/Fozzy_Temabit.png'
    },
    {
        nameReviewer: 'bonazziReviewer',
        positionReviewer: 'bonazziPosition',
        feedback: 'bonazziFeedback',
        pathToImg: '/feedbackers/Bonazzi_Lidiia.png',
        pathToLogoCompanyReviewer: '/feedback/Fora.png'
    },
    {
        nameReviewer: 'kuzmenkoReviewer',
        positionReviewer: 'kuzmenkoPosition',
        feedback: 'kuzmenkoFeedback',
        pathToImg: '/feedbackers/Kuzmenko_Andriy.png',
        pathToLogoCompanyReviewer: '/feedback/Silpo.png'
    },
    {
        nameReviewer: 'iosifovReviewer',
        positionReviewer: 'iosifovPosition',
        feedback: 'iosifovFeedback',
        pathToImg: '/feedbackers/Ievgen_Iosifov.png',
        pathToLogoCompanyReviewer: '/feedback/Ender_Turing.png'
    },
]