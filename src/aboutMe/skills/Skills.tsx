import style from './Skills.module.css'

type SkillsType = {
    activeTab: boolean
}

export const Skills = (props: SkillsType) => {
    return (
        <div className={style.skills}>
            <ul>
                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>User experience design<span>  -
                UI/UX</span></p> Delight the user and make it
                    work.
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Web and user interface design<span>  -
                Development</span></p> Delight the user and make it
                    work.
                </li>

            </ul>
        </div>
    )
}