export interface Contacts {
    email?: string;
    linkedin?: string;
    phone?: string;
    telegram?: string;
    facebook?: string;
    instagram?: string;
}

export interface PropsCardTeamMember {
    imgPath: string;
    keySpecialization: string
    keyMemberName: string;
    keyMemberDescription: string;
    contacts: Contacts
}