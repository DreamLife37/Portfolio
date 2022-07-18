import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
// @ts-ignore
import cv from '../assets/files/cv.pdf'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.titleBlock}>
                    <span className={style.subTitle}>Hi</span>
                    <h1 className={style.title}>I'm Andrey Schavelev
                        <br/>
                        <span>Frontend Developer</span>
                    </h1>

                    <a href={cv} className={style.downloadCV} target={"_blank"} rel="noopener noreferrer">DOWNLOAD
                        CV</a>

                </div>
                <div className={style.photo}></div>
            </div>


        </div>
    )
}