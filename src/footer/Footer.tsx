import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Andrey Schavelev</h3>
                <div className={style.iconsContainer}>
                    <div className={style.socialIconItem}>1</div>
                    <div className={style.socialIconItem}>2</div>
                    <div className={style.socialIconItem}>3</div>
                </div>
                <div>2022 Все права защищены</div>
            </div>
        </div>

    )
}