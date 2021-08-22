import React from 'react';
import ButtonBase from './button-base';
import { ButtonProps } from '@material-ui/core/Button/Button';

export function ButtonContained(props: ButtonProps): JSX.Element {
    return (
        <ButtonBase {...props} variant="contained">
            {props.children}
        </ButtonBase>
    );
}

export function ButtonOutlined(props: ButtonProps): JSX.Element {
    return (
        <ButtonBase {...props} variant="outlined">
            {props.children}
        </ButtonBase>
    );
}

export function ButtonText(props: ButtonProps): JSX.Element {
    return (
        <ButtonBase {...props} variant="text">
            {props.children}
        </ButtonBase>
    );
}
