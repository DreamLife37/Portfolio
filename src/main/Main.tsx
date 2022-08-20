import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
// @ts-ignore
import cv from '../assets/files/cv.pdf'
import photo from '../assets/images/photo.jpg'
import {Fade} from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (

            <div className={style.mainBlock}>
                <Fade delay={100} triggerOnce >
                <div className={` ${style.mainContainer}`}>
                    <div className={style.titleBlock}>
                        <span className={style.subTitle}>Hi</span>
                        <h1 className={style.title}>I'm Andrey Schavelev
                            <br/>
                            <ReactTypingEffect
                                text={'Frontend Developer'}
                            />
                        </h1>
                        <a href={cv} className={style.downloadCV} target={"_blank"} rel="noopener noreferrer">DOWNLOAD
                            CV</a>
                    </div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <img className={style.photo} src={photo}/>
                    </Tilt>
                </div>

                </Fade>
            </div>

    )
}