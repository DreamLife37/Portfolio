import style from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {LanguageType} from "../App";
import React from "react";
import {contactsData} from "../data/contactsData";

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
                                          href="mailto:example@gmail.com">example@gmail.com</a>
                    </p>
                    <form className={style.form}>
                        <input placeholder={langData.placeholderName} type="text" name="name" className={style.input}/>
                        <input placeholder={langData.placeholderEmail} type="text" name="email"
                               className={style.input}/>
                        <textarea placeholder={langData.placeholderMessage} name="message" className={style.textarea}/>
                    </form>
                    <button className={style.button}>{langData.buttonSend}</button>
                </div>
            </Fade>
        </div>
    )
}