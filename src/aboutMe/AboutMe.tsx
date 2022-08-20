import style from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container1.module.css'
import {Title} from "../common/components/title/Title";
import {Skills} from './skills/Skills';
import {useState} from "react";
import {Education} from "./education/Education";
import {Fade} from "react-awesome-reveal";


export const AboutMe = () => {

    const Tabs = 'MAIN_SKILLS' || 'EDUCATION'

    const [currentTab, setCurrentTab] = useState('MAIN_SKILLS')

    return (

        <div id='aboutMe' className={style.aboutMeBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.aboutMeContainer}>
                    <Title title={'About Me'}
                           subTitle={'My About Details'}
                           description={'I\'m a results-oriented frontend developer.\n' +
                               'I\'m learning, developing, constantly improving my skills'}/>
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
                               className={currentTab === 'WORK_EXPERIENCE' ? style.navItemActive : style.navItem}>Work
                                experience</a>
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
            </Fade>
        </div>

    )
}