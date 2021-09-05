import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { pathFolderImages } from '../../../constants/paths';
import {
    ContentContainer,
    FormSubmitButton,
    FormTitle,
    FormWrapper,
    ImageWrapper,
    SignInLink,
    SignInText,
} from './styles';
import { setLocale } from 'yup';
import { PT_LOCALE } from '../../../validations/locale/yup';
import {
    SocialMedia,
    SocialMediaButtons,
} from '../../buttons/social-media/social-media-buttons';
import { FormUserRegister, UserRegisterData } from './form-user-register';
import { ModalContext } from '../../../contexts/modal-context';
import { ModalUserLogin } from '../user-login/modal-user-login';

const imgPath = pathFolderImages + 'doctor-xray.jpg';

setLocale(PT_LOCALE);

function ModalUserRegister(): JSX.Element {
    const modalContext = useContext(ModalContext);
    const [initialValues] = useState<UserRegisterData>({
        email: '',
        name: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const submitRegister = (value) => alert(JSON.stringify(values));
    const loginWithSocialMedia = (mediaName: SocialMedia) => {
        console.log(mediaName);
        return mediaName;
    };

    function openModalLogin() {
        modalContext.setConfig?.({
            content: <ModalUserLogin />,
        });
    }

    return (
        <ContentContainer>
            <FormWrapper>
                <FormTitle>Criar conta</FormTitle>
                <FormUserRegister
                    initialValues={initialValues}
                    submitHandler={submitRegister}
                />
                <SignInText onClick={openModalLogin}>
                    Já tem uma conta? <SignInLink>Faça login</SignInLink>
                </SignInText>
                <FormSubmitButton
                    onClick={() => setLoading(true)}
                    loading={loading}
                >
                    Cadastrar
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

export { ModalUserRegister };
