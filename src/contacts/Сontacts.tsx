import style from './Сontacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Hire Me.'}
                       subTitle={'Let\'s Say Hi'}
                       description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'}/>
                <p className={style.email}>
                    Contact Email: <a className={style.imHover} href="mailto:example@gmail.com">example@gmail.com</a>
                </p>
                <form className={style.form}>
                    <input placeholder="Your name" type="text" name="name" className={style.input}/>
                    <input placeholder="Your e-mail" type="text" name="email" className={style.input}/>
                    <textarea placeholder="Enter your message" name="message" className={style.textarea}/>
                </form>
                <button className={style.button}>Send</button>

            </div>
        </div>
    )
}