import style from './Сontacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input placeholder="Your name" type="text" name="name"/>
                    <input placeholder="Your e-mail" type="text" name="email"/>
                    <textarea placeholder="Enter your message" name="message"/>
                </form>
                <button className={style.button}>Send</button>

            </div>
        </div>
    )
}