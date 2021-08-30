import styled from 'styled-components';
import { colors, pxToRem } from '../../styles/variables';
import { CSSProperties } from 'react';

export const ContentContainer = styled.div`
    min-width: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr;
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
`;

export const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    opacity: 0.25;
`;

export const formStyle: CSSProperties = {
    display: 'grid',
    gridRowGap: pxToRem(16),
};