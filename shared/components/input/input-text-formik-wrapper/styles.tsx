import styled, { css } from 'styled-components';
import { colors, pxToRem } from '../../../styles/variables';

const fontStyle = css`
    font-family: Mulish;
    font-weight: 600;
    text-transform: capitalize;
`;

export const InputLabel = styled.label<{ error?: boolean }>`
    ${fontStyle};
    font-size: ${pxToRem(13)};
    height: ${pxToRem(15)};
    color: ${({ error }) => (error ? colors.red60 : colors.grey)};
    width: max-content;
    cursor: pointer;
`;

export const InputErrorHint = styled(InputLabel)`
    font-size: ${pxToRem(12)};
    color: ${colors.red60};
    text-transform: lowercase;

    &:first-letter {
        text-transform: uppercase;
    }
`;

export const InputContainer = styled.fieldset`
    display: grid;
    grid-row-gap: ${pxToRem(6)};
    border: none;
    margin: 0;
    padding: 0;
`;
