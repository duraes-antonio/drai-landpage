import * as Yup from 'yup';
import {InputTextFormik} from '../../input/input-text-formik-wrapper/input-text-formik';
import {Field, Form, Formik} from 'formik';
import React, {memo} from 'react';
import {formStyle} from '../user-register/styles';

// TODO: Centralizar validação de password
const registerFormSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(4).max(7),
});

export type UserLoginData = {
    email: string;
    password: string;
};

export type FormLoginProps = {
    submitHandler: (values: Partial<UserLoginData>) => void;
    initialValues: Partial<UserLoginData>;
};

export function _FormUserLogin(props: FormLoginProps): JSX.Element {
    const inputType = InputTextFormik;
    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={props.submitHandler}
            validationSchema={registerFormSchema}
        >
            <Form style={formStyle}>
                <Field
                    name="email"
                    id="user-email"
                    type="email"
                    component={inputType}
                />
                <Field
                    name="password"
                    id="user-password"
                    component={inputType}
                    type="password"
                />
            </Form>
        </Formik>
    );
}

export const FormUserLogin = memo(_FormUserLogin);
