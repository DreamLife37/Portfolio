import style from './WorkExperience.module.scss'

export const WorkExperience = () => {
    return (
        <div className={style.workExperienceContainer}>
            <ul><h4>Мои работы как Front-end разработчика:</h4>
                <li>
                    <div className={style.title}>Проект: Обучающие карточки</div>
                    <div className={style.subTitle}>Stack: TS, React, Redux Toolkit, Redux-Thunk, React Router DOM,
                        Axios, Formik, MUI
                        <div>07.2022 - 09.2022</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Проект: Социальная сеть</div>
                    <div className={style.subTitle}> Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios,
                        Formik
                        <div>02.2022 - 09.2022</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Проект: Todolist</div>
                    <div className={style.subTitle}> Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios,
                        Formik, MUI, Storybook
                        <div>03.2022 - 08.2022</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Проект: Сайт для ресторана
                    </div>
                    <div className={style.subTitle}> Stack: JavaScript, Fetch API
                        <div>2020-2021</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Проект: Электроника24
                    </div>
                    <div className={style.subTitle}> Создание сайта на WordPress, его администрирование, продвижение
                        <div>03.2020 - 06.2020</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Проект: сайт компании “Сервис Компьютер”
                    </div>
                    <div className={style.subTitle}> Создание сайта на WordPress, его администрирование, продвижение
                        <div>01.2019 - 04.2019</div>
                    </div>
                </li>
            </ul>
            <ul><h4>Сервисный инженер</h4>
                <li>
                    <div className={style.title}>Компания: Сервис Компьютер</div>
                    <div className={style.subTitle}>Специалист по установке, настройке, поиску неисправностей и ремонту
                        высокотехнологичной техники.
                        <div>2012 - 2022</div>
                    </div>
                </li>

            </ul>
        </div>
    )
}