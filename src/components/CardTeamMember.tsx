import React from 'react';
import '../static/style.css';
import {Contacts, PropsCardTeamMember} from "../types/card_member";
import {useTranslation} from "react-i18next";
import copy from "clipboard-copy";


const ContactsCardMember = (props: Contacts) => {
    const copyText = (text: string | undefined) => {
        if (text) {
            copy(text)
        }
    }

    return (<div className="contacts">
        {props?.linkedin ? (
            <a href={props.linkedin} target="_blank" rel="noreferrer">
                <img src="/icons/linkedin_icon.svg" alt="linkedin logo icon"/>
            </a>
        ) : (<></>)}
        {props?.telegram ? (
            <a href={`https://t.me/${props.telegram}`} target="_blank" rel="noreferrer">
                <img src="/icons/telegram_icon.svg" alt="telegram logo icon"/>
            </a>
        ) : (<></>)}
        {props?.email ? (<React.Fragment>
            <a href={`mailto: ${props.email}`} target="_blank" rel="noreferrer">
                <img src="/icons/email_icon.svg" onDoubleClick={()=> {copyText(props.email)}} alt="email logo icon"/>
                {/*{props.email}*/}
            </a>
            {/*<Button onClick={() => {*/}
            {/*    copyText(props.email)*/}
            {/*}}>*/}
            {/*    <ContentCopyOutlinedIcon/>*/}
            {/*</Button>*/}
        </React.Fragment>) : (<></>)}
        {props?.phone ? (<React.Fragment>
            <a href={`tel: ${props.phone}`} target="_blank" rel="noreferrer">
                <img src="/icons/phone_icon.svg" onDoubleClick={()=>{copyText(props.phone)}} alt="phone logo icon"/>
                {/*{props.phone}*/}
            </a>
            {/*<img src="/icons/copy-icon.svg" alt="phone logo icon" width={29}/>*/}
            {/*<Button onClick={() => {*/}
            {/*    copyText(props.phone)*/}
            {/*}}>*/}
            {/*    <ContentCopyOutlinedIcon/>*/}
            {/*</Button>*/}
        </React.Fragment>) : (<></>)}
        {props?.facebook ? (
            <a href={props.facebook} target="_blank" rel="noreferrer">
                <img src="/icons/facebook_icon.svg" alt="facebook logo icon"/>
            </a>
        ) : (<></>)}
        {props?.instagram ? (
            <a href={props.instagram} target="_blank" rel="noreferrer">
                <img src="/icons/instagram_icon.svg" alt="instagram logo icon"/>
            </a>
        ) : (<></>)}
    </div>)

}

const CardTeamMember = (props: PropsCardTeamMember) => {
    const [t,] = useTranslation('translation');

    return (<div className="card team-member">
            <figure>
                <img src={props.imgPath} alt={`${t(props.keyMemberName)} emoji face`}/>
            </figure>
            <div className="info">
                <div>
                    <div className="specialization">{t(props.keySpecialization)}</div>
                    <h3 className="member-name">{t(props.keyMemberName)}</h3>
                    <p>{t(props.keyMemberDescription)}</p>
                </div>
                <ContactsCardMember {...props.contacts}/>
            </div>
        </div>
    )
}

export default CardTeamMember;