import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.navSection}>
            <div className={style.navItem}><a href="">Main</a></div>
            <div className={style.navItem}><a href="">About Me</a></div>
            <div className={style.navItem}><a href="#projects">My projects</a></div>
            <div className={style.navItem}><a href="">Contacts</a></div>
        </div>
    )
}