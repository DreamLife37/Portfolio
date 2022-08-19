import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import telegramIcon from '../assets/images/telegram.png'
import linkedinIcon from '../assets/images/linkedin.png'
import githubIcon from '../assets/images/github.png'
import {Fade} from "react-awesome-reveal";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <h3>Andrey Schavelev</h3>
                    <div className={style.iconsContainer}>
                        <a href={'https://t.me/DevAndreyIT'}>
                            <img className={style.socialIconItem} src={telegramIcon} alt={'Telegram Icon'}/>
                        </a>

                        <a href={'https://www.linkedin.com/in/devandreyit/'}>
                            <img className={style.socialIconItem} src={linkedinIcon} alt={'Linkedin Icon'}/>
                        </a>

                        <a href={'https://github.com/DreamLife37'}>
                            <img className={style.socialIconItem} src={githubIcon} alt={'Github Icon'}/>
                        </a>
                    </div>
                    <div>2022 All rights reserved</div>
                </div>
            </Fade>
        </div>
    )
}