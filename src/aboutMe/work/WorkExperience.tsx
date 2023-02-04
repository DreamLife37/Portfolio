import style from './WorkExperience.module.scss'
import React from "react";
import {LanguageType} from "../../App";
import {aboutMeData} from "../../data/aboutMeData";
import githubIcon from '../../assets/images/github.png'

export const WorkExperience: React.FC<{ language: LanguageType }> = ({language}) => {
    const langData = aboutMeData[language]
    return (
        <div className={style.workExperienceContainer}>
            <ul>
                <h4>{langData.workExperience.frontEnd.work}</h4>
                <li>
                    <span className={style.title}>{'Company One Life'}</span>
                    <div className={style.subTitle}>
                        Stack: TS, React, Redux, Ant design, Axios
                        <p> - {langData.workExperience.frontEnd.desc1Work} </p>
                        <p> - {langData.workExperience.frontEnd.desc2Work} </p>
                        <p> - {langData.workExperience.frontEnd.desc3Work} </p>
                        <p> - {langData.workExperience.frontEnd.desc4Work} </p>
                        <p> - {langData.workExperience.frontEnd.desc5Work} </p>
                        <div>07.2022 - present</div>
                    </div>
                    <span className={style.title}>{'Freelance'}</span>
                    <div className={style.subTitle}>
                        JavaScript, HTML, CSS
                        <div>01.2021 - 02.2022</div>
                    </div>
                </li>
            </ul>
            <ul>
                <h4>{langData.workExperience.frontEnd.title}</h4>
                <li>
                    <span className={style.title}>{langData.workExperience.frontEnd.projectCards}</span>
                    <a href={'https://github.com/DreamLife37/React_Project_Cards'} target={"_blank"}><img
                        src={githubIcon} alt={'Github Icon'}/></a>
                    <div className={style.subTitle}>
                        Stack: TS, React, Redux Toolkit, Redux-Thunk, React Router DOM, Axios, Formik, MUI
                        <div>2022</div>
                    </div>
                </li>

                <li>
                    <span className={style.title}>{langData.workExperience.frontEnd.projectSocialNetwork}</span>
                    <a href={'https://github.com/DreamLife37/React_Project_Social_Network_TS'} target={"_blank"}><img
                        src={githubIcon} alt={'Github Icon'}/></a>
                    <div className={style.subTitle}>
                        Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik
                        <div>2022</div>
                    </div>
                </li>

                <li>
                    <span className={style.title}>{langData.workExperience.frontEnd.projectTodolist}</span>
                    <a href={'https://github.com/DreamLife37/React_Project_Todolist_TS'} target={"_blank"}><img
                        src={githubIcon} alt={'Github Icon'}/></a>
                    <div className={style.subTitle}>
                        Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik, MUI, Storybook
                        <div>2022</div>
                    </div>
                </li>

                <li>
                    <span
                        className={style.title}>{langData.workExperience.frontEnd.projectRestaurant}</span>
                    <a href={'https://github.com/DreamLife37/JS_Project_Food'} target={"_blank"}><img
                        src={githubIcon} alt={'Github Icon'}/></a>
                    <div className={style.subTitle}>
                        Stack: JavaScript, Fetch API
                        <div>2020-2021</div>
                    </div>
                </li>

                <li>
                    <a className={style.title}>{langData.workExperience.frontEnd.projectElektronika24}</a>
                    <div className={style.subTitle}>
                        {langData.workExperience.frontEnd.description}
                        <div>2020</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>{langData.workExperience.frontEnd.projectServisComp}</div>
                    <div className={style.subTitle}>
                        {langData.workExperience.frontEnd.description}
                        <div>2019</div>
                    </div>
                </li>
            </ul>
            <ul>
                <h4>{langData.workExperience.serviceEngineer.title}</h4>
                <li>
                    <div className={style.title}>{langData.workExperience.serviceEngineer.placeWork}</div>
                    <div className={style.subTitle}>
                        {langData.workExperience.serviceEngineer.description}
                        <div>2012 - 2021</div>
                    </div>
                </li>

            </ul>
        </div>
    )
}