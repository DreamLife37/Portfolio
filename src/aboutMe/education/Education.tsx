import style from './Education.module.scss'

export const Education = () => {
    return (
        <div className={style.educationContainer}>
            <ul>
                <li>
                    <div className={style.title}>Front-End Development - IT Incubator</div>
                    <div className={style.subTitle}>React / Redux / Redux Toolkit /
                        TS / Router-dom / Axios / Formik
                        <div>2021 - 2022</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Javascript marathon - Vladilen Minin</div>
                    <div className={style.subTitle}> JavaScript
                        <div>2021</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Javascript marathon - Zar Zakharov</div>
                    <div className={style.subTitle}> JavaScript / Promise
                        <div>2021</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>The Complete JavaScript and React Course -
                        Udemy, Ivan Petrychenko</div>
                    <div className={style.subTitle}> JavaScript / React / Fetch API / Redux
                        <div>2020-2021</div>
                    </div>
                </li>

                <li>
                    <div className={style.title}>Engineer for technical
                        process automation - Ivanovo State Power University</div>
                    <div className={style.subTitle}>
                        <div>2008-2012</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}