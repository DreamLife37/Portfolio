import style from './MyProject.module.css'
import imageMyProject from './../../assets/images/imageMyProject.jpg'

type MyProjectType = {
    title: string
    description: string
}
export const MyProject = (props: MyProjectType) => {
    return (
        <div className={style.myProject}>
            <div className={style.projectImgContainer}>
                <a className={style.myProjectButton}>Посмотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}