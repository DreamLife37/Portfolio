import style from './AboutMe.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Skills} from './skills/Skills';
import {useState} from "react";
import {Education} from "./education/Education";


export const AboutMe = () => {

    const Tabs = 'MAIN_SKILLS' || 'EDUCATION'

    const [currentTab, setCurrentTab] = useState('MAIN_SKILLS')

    return (

        <div className={style.aboutMeBlock}>
            <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                <div className={style.aboutMe}>
                    <div className={style.aboutMeWrapper}><Title title={'About Me'}
                                                                 subTitle={'My About Details'}
                                                                 description={'I\'m a results-oriented frontend developer.\n' +
                                                                     'I\'m learning, developing, constantly improving my skills, I want to participate in cool projects.'}/>
                    </div>
                    <div className={style.menuTab}>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('MAIN_SKILLS')}
                               className={currentTab === 'MAIN_SKILLS' ? style.navItemActive : style.navItem}>Main
                                skills</a>
                        </div>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('EDUCATION')}
                               className={currentTab === 'EDUCATION' ? style.navItemActive : style.navItem}>Education</a>
                        </div>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('WORK_EXPERIENCE')}
                               className={currentTab === 'WORK_EXPERIENCE' ? style.navItemActive : style.navItem}>Work experience</a>
                        </div>
                    </div>

                    <div className={style.contentTab}>
                        {(currentTab === 'MAIN_SKILLS') &&
                            <Skills activeTab/>
                        }
                        {(currentTab === 'EDUCATION') &&
                            <Education/>
                        }</div>
                </div>
            </div>
        </div>

    )
}