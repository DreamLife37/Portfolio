import React from "react";
import {useFormik} from "formik";
import style from './Сontacts.module.scss'
import {LangContactsDataType} from "../data/contactsData";
import axios from "axios";

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

export const ContactsForm: React.FC<{ langData: LangContactsDataType }> = ({langData}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = langData.errorRequired;
            }
            if (!values.email) {
                errors.email = langData.errorRequired;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = langData.errorEmail;
            }
            if (!values.message) {
                errors.message = langData.errorRequired;
            }
            return errors;
        },
        onSubmit: async values => {
            axios.post('https://gmail-server-devandrey.herokuapp.com/sendMessage', values)
                .then(() => alert('Yoy message has been sent'))
            formik.resetForm()
        },
    })

    const disabledButton = (formik.values.email && !formik.errors.name && !formik.errors.email) ? false : true

    return <div>

        <form onSubmit={formik.handleSubmit} className={style.form}>

            <input {...formik.getFieldProps('name')} className={style.input} placeholder={langData.placeholderName}
            />
            {formik.touched.name && formik.errors.name
                ? <div style={{color: '#9d1717', fontSize: '14px'}}>{formik.errors.name}</div>
                : null}
            <input
                {...formik.getFieldProps('email')} className={style.input} placeholder={langData.placeholderEmail}
            />
            {formik.touched.email && formik.errors.email
                ? <div style={{color: '#9d1717', fontSize: '14px'}}>{formik.errors.email}</div>
                : null}

            <textarea {...formik.getFieldProps('message')} placeholder={langData.placeholderMessage} name="message"
                      className={style.textarea}/>
            {formik.touched.message && formik.errors.message
                ? <div style={{color: '#ffffff', fontSize: '12px'}}>{formik.errors.message}</div>
                : null}

            <button type={'submit'} className={style.button}
                    disabled={disabledButton}>
                {langData.buttonSend}
            </button>


            {/*<p style={{fontSize: '14px'}}>*/}
            {/*    <NavLink to={Path.login}>Sign In</NavLink>*/}
            {/*</p>*/}

        </form>

    </div>
}