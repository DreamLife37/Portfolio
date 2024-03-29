import style from './Skills.module.scss'

import React from "react";


export const Skills = () => {
    return (
        <div className={style.skillsContainer}>
            <ul>
                <li><span className={style.title}>Javascript, Typescript, ES6+</span></li>
                <li><span className={style.title}>JavaScript library and frameworks - React, Next, NodeJS</span></li>
                <li><span className={style.title}>MongoDB</span></li>
                <li><span className={style.title}>CSS preprocessors - SASS</span></li>
                <li><span className={style.title}>State management libraries - Redux, Redux Toolkit</span></li>
                <li><span className={style.title}>React Query</span></li>
                <li><span className={style.title}>Version control - Git</span></li>
                <li><span className={style.title}>Unit tests, Storybook</span></li>
                <li><span className={style.title}>Axios, Rest API</span></li>
                <li><span className={style.title}>Material Ul, Ant design, Chakra UI</span></li>
                <li><span className={style.title}>React Native</span></li>
                <li><span className={style.title}>Firebase</span></li>
            </ul>
        </div>
    )
}