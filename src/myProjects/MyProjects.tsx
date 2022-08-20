import style from './MyProjects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {MyProject} from "./myProject/MyProject";
import {Title} from "../common/components/title/Title";
import imageMyProject from './../assets/images/imageMyProject.jpg'
import {Fade} from "react-awesome-reveal";

export const MyProjects = () => {
    const social = {
        backgroundImage: `url(${imageMyProject})`
    };
    return (
        <div id='projects' className={style.myProjectsBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                    <Title title={'My Latest Project'}
                           subTitle={'My complete project'}
                           description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'}/>
                    <div className={style.myProjects}>
                        <MyProject style={social} title={'Social Network'}
                                   description={'Description Social Network'}/>
                        <MyProject style={social} title={'Todolist'}
                                   description={'Description Todolist'}/>
                        <MyProject style={social} title={'Project Food'}
                                   description={'Description project for a restaurant. JavaScript'}/>
                        <MyProject style={social} title={'Project Food'}
                                   description={'Description project for a restaurant. JavaScript'}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}