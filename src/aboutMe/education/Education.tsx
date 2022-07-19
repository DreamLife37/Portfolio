import style from './Education.module.css'

export const Education = () => {
    return (
        <div className={style.skills}>
            <ul>
                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Front-End Development<span>  -
               IT Incubator</span></p> 2021 - 2022
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Javascript marathon<span>  -
               Vladilen Minin</span></p> 2021
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Javascript marathon<span>  -
               Zar Zakharov</span></p> 2021
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>The Complete JavaScript and React Course <span>  -
               Udemy, Ivan Petrychenko</span></p> 2020 - 2021
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Automation of technical processes<span>  -
                Ivanovo State Power Engineering University</span></p> 2008 - 2012
                </li>

            </ul>
        </div>
    )
}