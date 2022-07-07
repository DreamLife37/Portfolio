import style from './Skills.module.css'
import ReactIcon from "../../assets/images/react.png";
import ReduxIcon from "../../assets/images/redux.png";
import GitIcon from "../../assets/images/github.png";
import SassIcon from "../../assets/images/sass.png";

type SkillsType = {
    activeTab: boolean
}

export const Skills = (props: SkillsType) => {
    return (
        <div className={style.skills}>
            <ul>
                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>JavaScript library and frameworks<span>  -
                React  </span></p>  <img className={style.skillsIconItem} src={ReactIcon}/>
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>CSS preprocessors<span>  -
                SASS</span></p>
                    <img className={style.skillsIconItem} src={SassIcon}/>
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>State management libraries<span>  -
                Redux</span></p>
                    <img className={style.skillsIconItem} src={ReduxIcon}/>
                </li>

                <li className={style.subTitleSkill}>
                    <p className={style.titleSkill}>Version control<span>  -
                Git</span></p>
                    <img className={style.skillsIconItem} src={GitIcon}/>
                </li>

            </ul>
        </div>
    )
}