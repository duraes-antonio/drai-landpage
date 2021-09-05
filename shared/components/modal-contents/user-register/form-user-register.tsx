import * as Yup from 'yup';
import { InputTextFormik } from '../../input/input-text-formik-wrapper/input-text-formik';
import { Field, Form, Formik } from 'formik';
import { formStyle } from './styles';
import React, { memo } from 'react';

const registerFormSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(4).max(7),
});

export type UserRegisterData = {
    name: string;
    email: string;
    password: string;
};

export type FormUserRegisterProps = {
    submitHandler: (values: Partial<UserRegisterData>) => void;
    initialValues: Partial<UserRegisterData>;
};

export function _FormUserRegister(props: FormUserRegisterProps): JSX.Element {
    const inputType = InputTextFormik;
    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={props.submitHandler}
            validationSchema={registerFormSchema}
        >
            <Form style={formStyle}>
                <Field name="name" id="user-name" component={inputType} />
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

export const FormUserRegister = memo(_FormUserRegister);
