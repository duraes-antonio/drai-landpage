import React, { memo, ReactElement } from 'react';
import { SocialMediaButton } from './social-media-button';
import { SvgFacebook, SvgGoogle, SvgInstagram } from '../../svg/social-media';
import styled from 'styled-components';
import { colors, pxToRem } from '../../../styles/variables';
import { flexCenter } from '../../../styles/placeholders';

export enum SocialMedia {
    FACEBOOK,
    GOOGLE,
    INSTAGRAM,
}

export interface SocialMediaButtonsProps {
    onSelect: (cb: SocialMedia) => void;
}

const config: { name: SocialMedia; icon: ReactElement }[] = [
    { name: SocialMedia.FACEBOOK, icon: <SvgFacebook /> },
    { name: SocialMedia.GOOGLE, icon: <SvgGoogle /> },
    { name: SocialMedia.INSTAGRAM, icon: <SvgInstagram /> },
];

const Container = styled.div`
    display: grid;
    row-gap: ${pxToRem(12)};
`;

const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    column-gap: ${pxToRem(24)};
`;

const Title = styled.span`
    ${flexCenter};
    font-family: Mulish;
    font-size: ${pxToRem(13)};
    color: ${colors.grey};
    font-weight: 400;
    text-align: center;
    position: relative;
    overflow: hidden;

    &:before,
    &:after {
        background-color: #eee;
        content: '';
        height: ${pxToRem(1)};
        position: relative;
        width: 50%;
    }

    &:before {
        right: ${pxToRem(10)};
        margin-left: -50%;
    }

    &:after {
        left: ${pxToRem(10)};
        margin-right: -50%;
    }
`;

function _SocialMediaButtons(props: SocialMediaButtonsProps): JSX.Element {
    return (
        <Container>
            <Title>Ou utilize suas redes sociais</Title>
            <ContainerButtons>
                {config.map((c) => (
                    <SocialMediaButton
                        key={c.name}
                        onClick={() => props.onSelect(c.name)}
                        icon={c.icon}
                    />
                ))}
            </ContainerButtons>
        </Container>
    );
}

export const SocialMediaButtons = memo(_SocialMediaButtons);
