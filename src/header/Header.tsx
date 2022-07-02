import style from './Header.module.scss'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerSection}>
                <div className={style.logo}>DevAndreyIT</div>
            </div>
            <div className={style.headerSection}>
                <Nav/>
            </div>
        </div>
    )
}