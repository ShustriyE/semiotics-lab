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
        feedback: 'slaviogloFeedback',
        positionReviewer: 'VP of IT at Fozzy Group',
        pathToImg: 'https://media-exp1.licdn.com/dms/image/C5603AQFfJ2wlYWa1Yg/profile-displayphoto-shrink_800_800/0/1516264704843?e=1661990400&v=beta&t=CH1su-y8Lv6uvcE52NLc-yPMak8iC9d-43W_YolUB5A',
        pathToLogoCompanyReviewer: '/feedback/logo_fozzy.png'
    },
    {
        nameReviewer: 'slaviogloReviewer',
        feedback: 'slaviogloFeedback',
        positionReviewer: 'VP of IT at Fozzy Group',
        pathToImg: 'https://media-exp1.licdn.com/dms/image/C5603AQFfJ2wlYWa1Yg/profile-displayphoto-shrink_800_800/0/1516264704843?e=1661990400&v=beta&t=CH1su-y8Lv6uvcE52NLc-yPMak8iC9d-43W_YolUB5A',
        pathToLogoCompanyReviewer: '/feedback/logo_fozzy.png'
    }
]