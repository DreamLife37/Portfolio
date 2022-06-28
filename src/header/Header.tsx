import style from './Header.module.scss'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>DevAndreyIT</div>
            <Nav/>
        </div>
    )
}