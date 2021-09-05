import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../styles/placeholders';

export interface SocialMediaButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
}

const Button = styled.button`
    ${flexCenter};
    cursor: pointer;
    background-color: white;
    appearance: none;
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
    height: 45px;
    width: 45px;
    transition-property: opacity, box-shadow;
    transition-duration: 0.25s;
    outline-color: red;

    &:hover,
    &:focus {
        opacity: 0.75;
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
    }
`;

function _SocialMediaButton(props: SocialMediaButtonProps): JSX.Element {
    return <Button {...props}>{props.icon}</Button>;
}

export const SocialMediaButton = memo(_SocialMediaButton);
