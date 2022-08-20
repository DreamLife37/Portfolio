import style from './Nav.module.scss'
import {Link} from "react-scroll";


export const Nav = () => {
    const heightHeader = 80
    return (
        <div className={style.navSection}>
            <Link activeClass={style.active} className={style.navItem} to="main" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>Main</Link>
            <Link activeClass={style.active} className={style.navItem} to="aboutMe" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>About Me</Link>
            <Link activeClass={style.active} className={style.navItem} to="projects" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>My projects</Link>
            <Link activeClass={style.active} className={style.navItem} to="contacts" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>Contacts</Link>
        </div>
    )
}