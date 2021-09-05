import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { pathFolderImages } from '../../../constants/paths';
import {
    ContentContainer,
    FormTitle,
    FormWrapper,
    ImageWrapper,
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
    const submitRegister = () => {
        setLoading(true);
        return new Promise(function (resolve) {
            setTimeout((a) => {
                setLoading(false);
                resolve(a);
            }, 3000);
        });
    };
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
                    onLoginLinkClick={openModalLogin}
                    initialValues={initialValues}
                    submitHandler={submitRegister}
                    isSubmitting={loading}
                />
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
