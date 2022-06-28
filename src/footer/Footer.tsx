import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import telegramIcon from '../assets/images/telegram.png'
import linkedinIcon from '../assets/images/linkedin.png'
import githubIcon from '../assets/images/github.png'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Andrey Schavelev</h3>
                <div className={style.iconsContainer}>
                    <a href={'https://t.me/DevAndreyIT'}>
                        <img className={style.socialIconItem} src={telegramIcon}/>
                    </a>

                    <a href={'https://www.linkedin.com/in/devandreyit/'}>
                        <img className={style.socialIconItem} src={linkedinIcon}/>
                    </a>

                    <a href={'https://github.com/DreamLife37'}>
                        <img className={style.socialIconItem} src={githubIcon}/>
                    </a>
                </div>
                <div>2022 All rights reserved</div>
            </div>
        </div>

    )
}