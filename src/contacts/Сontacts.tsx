import style from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {LanguageType} from "../App";
import React from "react";
import {contactsData} from "../data/contactsData";
import {ContactsForm} from "./ContactsForm";


export const Contacts: React.FC<{ language: LanguageType }> = ({language}) => {
    const langData = contactsData[language]


    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.contactsContainer}>
                    <Title title={langData.title}
                           subTitle={langData.subTitle}
                           description={langData.description}/>
                    <p className={style.email}>
                        {langData.contactEmail}: <a className={style.linkEmail}
                                                    href="mailto:devandreyinfo@gmail.com">devandreyinfo@gmail.com</a>
                    </p>

                    <ContactsForm langData={langData}/>
                </div>
            </Fade>
        </div>
    )
}