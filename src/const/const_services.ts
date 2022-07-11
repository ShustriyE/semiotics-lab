import {Service} from "../types/card_services";

const leftBlock: Service = {
    keyTitleService: "services_left_competencies_title",
    keyTextService: "services_left_competencies_text",
    serviceBlocks: [
        {
            textAlign: 'left',
            isChip: true,
            keyTitleBlock: "technologies",
            keyDescriptionBlock: "technologies_first_block_service",
            technologies: [
                {
                    imgTechnology: "/technologies/python_logo.svg",
                    titleTechnology: "python",
                    altText: "python logo",
                    badgeTechnology: 4,
                    keyDescriptionTechnology: "python_tech_description"
                },
                {
                    imgTechnology: "/technologies/tensorflow_logo.svg",
                    titleTechnology: "tensorflow",
                    badgeTechnology: 2,
                    keyDescriptionTechnology: "tensorflow_tech_description"
                },

            ]
        }
    ]
}
const centerBlock: Service = {
    keyTitleService: "services_center_competencies_title",
    keyTextService: "services_center_competencies_text",
    serviceBlocks: []
}
const rightBlock: Service = {
    keyTitleService: "services_right_competencies_title",
    keyTextService: "services_right_competencies_text",
    serviceBlocks: []
}

export const services: Array<Service> = [
    leftBlock,
    centerBlock,
    rightBlock,
]