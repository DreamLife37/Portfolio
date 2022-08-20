import style from './Skills.module.css'
import styleContainer from '../common/styles/Container1.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'JS description'}/>
                    <Skill title={'React'}
                           description={'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'}/>
                    <Skill title={'CSS'} description={'CSS description'}/>
                </div>
            </div>


        </div>
    )
}