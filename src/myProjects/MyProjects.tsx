import style from './MyProjects.module.scss'
import {MyProject} from "./myProject/MyProject";
import {Title} from "../common/components/title/Title";
import imageMyProject from './../assets/images/imageMyProject.jpg'
import imageForOnlineShop from './../assets/images/OnlineShop.jpg'
import imageForSocialNetwork from './../assets/images/SocialNetwork.jpg'
import imageForProjectFood from './../assets/images/ProjectFood.jpg'
import imageForProjectCards from './../assets/images/ProjectCards.jpg'
import imageForWbNotice from './../assets/images/WbNotice.jpg'
import {Fade} from "react-awesome-reveal";
import {myProjectsData} from "../data/myProjectsData";
import React from "react";
import {LanguageType} from "../App";

export const MyProjects: React.FC<{ language: LanguageType }> = ({language}) => {
    const todolist = {
        backgroundImage: `url(${imageMyProject})`
    };
    const onlineShop = {
        backgroundImage: `url(${imageForOnlineShop})`
    };
    const wbNotice = {
        backgroundImage: `url(${imageForWbNotice})`
    };
    const forSocialNetwork = {
        backgroundImage: `url(${imageForSocialNetwork})`
    };
    const forProjectFood = {
        backgroundImage: `url(${imageForProjectFood})`
    };

    const forProjectCards = {
        backgroundImage: `url(${imageForProjectCards})`
    };


    const langData = myProjectsData[language]
    return (
        <div id='projects' className={style.myProjectsBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.myProjectsContainer}>
                    <Title title={langData.title}
                           subTitle={langData.subTitle}
                           description={langData.description}/>
                    <div className={style.myProjects}>
                        <MyProject langDataButton={langData.nameButton} image={wbNotice}
                                   title={'Wildberries notice'}
                                   description={'Back-end stack: Node JS, Express, MongoDB'}
                                   subDescription={'Front-end stack: Next, React Query'}
                                   link={'https://github.com/DreamLife37/Next.js_Project_Wildberries_Notice'}/>
                        <MyProject langDataButton={langData.nameButton} image={onlineShop}
                                   title={'Prototype online store'}
                                   description={'Stack: TS, React, Redux, Redux toolkit, React Router DOM, MUI, Formik, Firebase'}
                                   link={'https://github.com/DreamLife37/React_Project_Internet_Shop_with_Firebase'}/>
                        <MyProject langDataButton={langData.nameButton} image={forSocialNetwork}
                                   title={'Social Network'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik'}
                                   link={'https://github.com/DreamLife37/React_Project_Social_Network_TS'}/>
                        <MyProject langDataButton={langData.nameButton} image={todolist} title={'Todolist'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik, MUI, Storybook'}
                                   link={'https://github.com/DreamLife37/React_Project_Todolist_TS'}/>
                        <MyProject langDataButton={langData.nameButton} image={forProjectFood} title={'Project Food'}
                                   description={'Stack: JavaScript, Fetch API, AJAX, Axios, JSON-server'}
                                   link={'https://github.com/DreamLife37/JS_Project_Food'}/>
                        <MyProject langDataButton={langData.nameButton} image={forProjectCards} title={'Project Cards'}
                                   description={'Stack: TS, React, Redux Toolkit, Redux-Thunk, React Router DOM, Axios, Formik, MUI'}
                                   link={'https://github.com/DreamLife37/React_Project_Cards'}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}