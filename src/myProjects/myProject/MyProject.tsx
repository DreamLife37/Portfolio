import style from './MyProject.module.scss'


type MyProjectType = {
    title: string
    description: string
    style?: any
}
export const MyProject = (props: MyProjectType) => {
    return (
        <div className={style.portfolio}>
            <div className={style.projectImgContainer} style={props.style}>
                <a className={style.myProjectButton} href={'ya.ru'}>Смотреть</a>
            </div>
            <div className={style.content}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p><span className={style.description}>{props.description}</span></p>
            </div>
        </div>
    )
}

