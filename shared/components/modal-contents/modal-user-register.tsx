import React, { useState } from 'react';
import Image from 'next/image';
import { pathFolderImages } from '../../constants/paths';
import {
    ContentContainer,
    formStyle,
    FormSubmitButton,
    FormTitle,
    FormWrapper,
    ImageWrapper,
    SignInLink,
    SignInText,
} from './styles';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { setLocale } from 'yup';
import { InputTextFormik } from '../input/input-text-formik-wrapper/input-text-formik';
import { PT_LOCALE } from '../../validations/locale/yup';

const imgPath = pathFolderImages + 'doctor-xray.jpg';

setLocale(PT_LOCALE);

const formSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(4).max(7),
});

function FormUserRegister({ initialValues, submitHandler }): JSX.Element {
    const inputType = InputTextFormik;
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={formSchema}
        >
            <Form style={formStyle}>
                <Field name="name" id="user-name" component={inputType} />
                <Field name="email" id="user-email" component={inputType} />
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

function ModalUserRegister(): JSX.Element {
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const submitRegister = (values, actions) => alert(JSON.stringify(values));
    return (
        <ContentContainer>
            <FormWrapper>
                <FormTitle>Criar conta</FormTitle>
                <FormUserRegister
                    initialValues={initialValues}
                    submitHandler={submitRegister}
                />
                <SignInText>
                    Já tem uma conta? <SignInLink>Faça login</SignInLink>
                </SignInText>
                <FormSubmitButton>Cadastrar</FormSubmitButton>
                <SocialMediaButtons/>
            </FormWrapper>

            <ImageWrapper>
                <Image layout="fill" objectFit="cover" src={imgPath} />
            </ImageWrapper>
        </ContentContainer>
    );
}

export { ModalUserRegister };
