import style from './Education.module.css'

export const Education = () => {
    return (
        <div className={style.educationContainer}>
            <ul>
                <li>
                    <p className={style.title}>Front-End Development - IT Incubator</p>
                    <p className={style.subTitle}>React / Redux / Redux Toolkit /
                        TS / Router-dom / Axios / Formik
                        <p>2021 - 2022</p>
                    </p>
                </li>

                <li>
                    <p className={style.title}>Javascript marathon - Vladilen Minin</p>
                    <p className={style.subTitle}> JavaScript
                        <p>2021</p>
                    </p>
                </li>

                <li>
                    <p className={style.title}>Javascript marathon - Zar Zakharov</p>
                    <p className={style.subTitle}> JavaScript / Promise
                        <p>2021</p>
                    </p>
                </li>

                <li>
                    <p className={style.title}>The Complete JavaScript and React Course -
                        Udemy, Ivan Petrychenko</p>
                    <p className={style.subTitle}> JavaScript / React / Fetch API / Redux
                        <p>2020-2021</p>
                    </p>
                </li>

                <li>
                    <p className={style.title}>Automation of technical processes -
                        Ivanovo State Power Engineering University</p>
                    <p className={style.subTitle}> JavaScript / React / Fetch API / Redux
                        <p>2008-2012</p>
                    </p>
                </li>
            </ul>
        </div>
    )
}