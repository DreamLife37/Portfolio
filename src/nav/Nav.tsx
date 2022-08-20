import style from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.navSection}>
            <Link activeClass={style.active} className={style.navItem} to="main" spy={true} smooth={true}
                  duration={500}>Main</Link>
            <Link activeClass={style.active} className={style.navItem} to="aboutMe" spy={true} smooth={true}
                  duration={500}>About Me</Link>
            <Link activeClass={style.active} className={style.navItem} to="projects" spy={true} smooth={true}
                  duration={500}>My projects</Link>
            <Link activeClass={style.active} className={style.navItem} to="contacts" spy={true} smooth={true}
                  duration={500}>Contacts</Link>
        </div>
    )
}