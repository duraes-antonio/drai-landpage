import React, { memo } from 'react';
import { InputTextComponent } from '../../../types/input-text';
import styled from 'styled-components';
import { colors, pxToRem } from '../../../styles/variables';
import { alpha } from '@material-ui/core';

const _Input = styled.input<{ color: string; error?: boolean }>`
    border-radius: 8px;
    background-color: white;
    border: 1px solid
        ${({ error, color, disabled }) =>
            disabled || !error ? '#d3d3d3' : color};
    box-sizing: border-box;
    color: ${colors.darkgrey};
    font-size: ${pxToRem(14)};
    font-weight: normal;
    height: ${pxToRem(38)};
    line-height: ${pxToRem(18)};
    padding: ${pxToRem(10)} ${pxToRem(12)};
    width: 100%;
    transition-property: border-color, box-shadow;
    transition-duration: 0.25s;
    outline: none;

    &:focus {
        border-color: ${(props) => props.color};
        box-shadow: ${(props) => alpha(props.color, 0.25)} 0 0 0 0.15rem;
    }
`;

function _InputText(props: InputTextComponent): JSX.Element {
    return <_Input {...props} error={props?.error} color={props.color} />;
}

export const InputText = memo(_InputText);
