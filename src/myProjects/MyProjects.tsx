import style from './MyProjects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {MyProject} from "./myProject/MyProject";

export const MyProjects = () => {
    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.myProjects}>
                    <MyProject title={'Social Network'}
                               description={'Description Social Network'}/>
                    <MyProject title={'Todolist'}
                               description={'Description Todolist'}/>
                    <MyProject title={'Project_Food'}
                               description={'Description project for a restaurant. JavaScript'}/>
                </div>
            </div>
        </div>
    )
}