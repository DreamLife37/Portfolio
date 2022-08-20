import style from './Сontacts.module.scss'
import styleContainer from '../common/styles/Container1.module.css'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.contactsContainer}>
                    <Title title={'Hire Me.'}
                           subTitle={'Let\'s Say Hi'}
                           description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'}/>
                    <p className={style.email}>
                        Contact Email: <a className={style.linkEmail}
                                          href="mailto:example@gmail.com">example@gmail.com</a>
                    </p>
                    <form className={style.form}>
                        <input placeholder="Your name" type="text" name="name" className={style.input}/>
                        <input placeholder="Your e-mail" type="text" name="email" className={style.input}/>
                        <textarea placeholder="Enter your message" name="message" className={style.textarea}/>
                    </form>
                    <button className={style.button}>Send</button>
                </div>
            </Fade>
        </div>
    )
}