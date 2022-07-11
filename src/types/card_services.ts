
export interface ServiceTechnology{
    imgTechnology: string
    titleTechnology?: string
    altText?: string
    badgeTechnology?: number
    keyDescriptionTechnology: string

}
export interface ServiceTechnologyBlock {
    textAlign?: 'center' | 'right' | 'left';
    isChip: boolean
    keyTitleBlock: string
    keyDescriptionBlock?: string
    technologies?: ServiceTechnology[]
}

export interface Service{
    imgService?: string
    keyTitleService: string
    keyTextService: string
    serviceBlocks: ServiceTechnologyBlock[]
}