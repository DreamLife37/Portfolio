import style from './AboutMe.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Skills} from './skills/Skills';
import {useState} from "react";
import {Education} from "./education/Education";


export const AboutMe = () => {

    const Tabs = 'MAIN_SKILLS' || 'EDUCATION'

    const [currentTab, setCurrentTab] = useState('MAIN_SKILLS')

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.avatar}>Image</div>
                <div className={style.aboutMe}>
                    <Title title={'About Me'}
                           subTitle={'My About Details'}
                           description={'There are many variations of passages of Lorem Ipsum available'}/>
                    <div className={style.menuTab}>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('MAIN_SKILLS')} className={style.navItem}>Main skills</a>
                        </div>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('EDUCATION')} className={style.navItem}>Education</a>
                        </div>

                    </div>

                    <div>{(currentTab == 'MAIN_SKILLS') &&
                        <Skills/>
                    }
                        {(currentTab == 'EDUCATION') &&
                            <Education/>
                        }</div>

                </div>

            </div>


        </div>
    )
}