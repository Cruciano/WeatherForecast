import React from 'react';
import styles from './cityForm.module.css';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {loadForecast} from "../../Application/thunks/loadForecast";
import {useDispatch} from "react-redux";

const schema = Yup.object().shape({
    city: Yup.string()
        .required('Required'),
});

const CityForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        dispatch(loadForecast(values.city));
    }

    return (
        <Formik
            initialValues={{
                city: '',
            }}
            validationSchema={schema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
            {({errors, touched}) => (
                <Form>
                    <div className={styles.formItem}>
                        <Field name='city' placeholder='Enter city'/>
                        {errors.city && touched.city ? (
                            <div className={styles.help}>{errors.city}</div>
                        ) : <div className={`${styles.help} ${styles.hidden}`}>hidden</div>}
                    </div>
                    <button className={styles.button} type="submit">Search</button>
                </Form>
            )}
        </Formik>
    );
};

export default CityForm;