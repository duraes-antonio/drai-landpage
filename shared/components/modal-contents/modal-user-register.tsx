import React, { useState } from 'react';
import Image from 'next/image';
import { pathFolderImages } from '../../constants/paths';
import {
    ContentContainer,
    formStyle,
    FormTitle,
    FormWrapper,
    ImageWrapper,
} from './styles';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { InputTextFormik } from '../input/input-text-formik-wrapper/input-text-formik';

const imgPath = pathFolderImages + 'doctor-xray.jpg';

const formSchema = Yup.object().shape({
    name: Yup.string().required('Field is required'),
    email: Yup.string().email('Invalid email').required('Field is required'),
    password: Yup.string().required('Field is required').min(4).max(7),
});

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
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitRegister}
                    validationSchema={formSchema}
                >
                    <Form style={formStyle}>
                        <Field
                            name="name"
                            id="user-name"
                            component={InputTextFormik}
                        />
                        <Field
                            name="email"
                            id="user-email"
                            component={InputTextFormik}
                        />
                        <Field
                            name="password"
                            id="user-password"
                            component={InputTextFormik}
                            type="password"
                        />
                    </Form>
                </Formik>
                <div>Social midia</div>
            </FormWrapper>

            <ImageWrapper>
                <Image
                    layout="fill"
                    priority={true}
                    objectFit="cover"
                    src={imgPath}
                />
            </ImageWrapper>
        </ContentContainer>
    );
}

export { ModalUserRegister };
