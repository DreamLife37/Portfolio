import style from './Education.module.css'

export const Education = () => {
    return (
        <div className={style.skills}>
            <ul>
                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Automation of technical processes<span>  -
                Ivanovo State Power Engineering University</span></p> 2008-2012
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Front End Development<span>  -
               IT Incubator</span></p> 2022
                </li>

            </ul>
        </div>
    )
}