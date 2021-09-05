import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { pathFolderImages } from '../../../constants/paths';

import { setLocale } from 'yup';
import { PT_LOCALE } from '../../../validations/locale/yup';
import {
    SocialMedia,
    SocialMediaButtons,
} from '../../buttons/social-media/social-media-buttons';
import { FormUserLogin, UserLoginData } from './form-user-login';
import {
    ContentContainer,
    FormSubmitButton,
    FormTitle,
    FormWrapper,
    ImageWrapper,
    SignInLink,
    SignInText,
} from '../user-register/styles';
import { ModalContext } from '../../../contexts/modal-context';
import { ModalUserRegister } from '../user-register/modal-user-register';

const imgPath = pathFolderImages + 'medic-keyboard.jpg';

setLocale(PT_LOCALE);

function ModalUserLogin(): JSX.Element {
    const modalContext = useContext(ModalContext);
    const [initialValues] = useState<UserLoginData>({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const submitRegister = (value) => alert(JSON.stringify(value));
    const loginWithSocialMedia = (mediaName: SocialMedia) => {
        console.log(mediaName);
        return mediaName;
    };

    function openModalRegister() {
        modalContext.setConfig?.({
            content: <ModalUserRegister />,
        });
    }

    return (
        <ContentContainer>
            <FormWrapper>
                <FormTitle>Login</FormTitle>
                <FormUserLogin
                    initialValues={initialValues}
                    submitHandler={submitRegister}
                />
                <SignInText onClick={openModalRegister}>
                    Ainda não tem uma conta? <SignInLink>Crie uma</SignInLink>
                </SignInText>
                <FormSubmitButton
                    onClick={() => setLoading(true)}
                    loading={loading}
                >
                    Entrar
                </FormSubmitButton>
                <SocialMediaButtons
                    onSelect={(social) => loginWithSocialMedia(social)}
                />
            </FormWrapper>

            <ImageWrapper>
                <Image layout="fill" objectFit="cover" src={imgPath} />
            </ImageWrapper>
        </ContentContainer>
    );
}

export { ModalUserLogin };
