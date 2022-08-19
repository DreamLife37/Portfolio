import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
// @ts-ignore
import cv from '../assets/files/cv.pdf'
import photo from '../assets/images/photo.jpg'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.titleBlock}>
                    <span className={style.subTitle}>Hi</span>
                    <h1 className={style.title}>I'm Andrey Schavelev
                        <br/>
                        <span>Frontend Developer</span>
                    </h1>
                    <a href={cv} className={style.downloadCV} target={"_blank"} rel="noopener noreferrer">DOWNLOAD
                        CV</a>
                </div>
                <img className={style.photo} src={photo}/>
            </div>


        </div>
    )
}