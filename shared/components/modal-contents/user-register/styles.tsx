import styled, { css } from 'styled-components';
import { breakpoints, colors, pxToRem } from '../../../styles/variables';
import { CSSProperties } from 'react';
import { ButtonContained } from '../../buttons/buttons';
import { motion } from 'framer-motion';

export const ContentContainer = styled.div`
    min-width: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr;

    @media (max-width: ${breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
`;

export const FormTitle = styled.h3`
    color: ${colors.grey};
    font-weight: 600;
    font-size: ${pxToRem(24)};
    margin: 0;
`;

export const FormWrapper = styled.main`
    display: flex;
    flex-direction: column;
    grid-row-gap: ${pxToRem(24)};
    padding: ${pxToRem(40)} ${pxToRem(48)} ${pxToRem(24)};

    @media (max-width: ${breakpoints.sm}) {
        padding: ${pxToRem(32)} ${pxToRem(32)} ${pxToRem(24)};
    }
`;

export const ImageWrapper = styled(motion.div)`
    position: relative;
    overflow: hidden;

    img {
        opacity: 0.25;
    }

    @media (max-width: ${breakpoints.sm}) {
        display: none;
    }
`;

export const formStyle: CSSProperties = {
    display: 'grid',
    gridRowGap: pxToRem(16),
};

const fontStyle = css`
    color: ${colors.grey};
    font-family: Mulish;
    font-size: ${pxToRem(13)};
    font-weight: 600;
`;

export const SignInText = styled.a`
    ${fontStyle};
    cursor: pointer;
    width: max-content;
`;

export const SignInLink = styled(SignInText)`
    color: ${colors.primary};
    margin: 0;
`;

export const FormSubmitButton = styled(ButtonContained)`
    text-transform: capitalize !important;
    letter-spacing: 0.25px;
    width: max-content;
    align-self: center;
`;
