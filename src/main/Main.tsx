import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'

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

                    <div className={style.projectImgContainer}>
                        <a className={style.downloadCV} href={'ya.ru'}>DOWNLOAD CV</a>
                    </div>
                </div>
                <div className={style.photo}></div>
            </div>


        </div>
    )
}