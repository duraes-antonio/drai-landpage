import styled from 'styled-components';
import {
    breakpoints,
    fontDefault,
    spacingPixelsX,
} from '../../../shared/styles/variables';

export const FooterContainer = styled.footer`
    background-color: #5eb0ff;
    display: grid;
    grid-column-gap: ${spacingPixelsX(3)};
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: ${spacingPixelsX(3)} ${spacingPixelsX(9.4375)};
    width: 100%;

    @media (max-width: ${breakpoints.sm}) {
        padding: ${spacingPixelsX(2)};
    }
`;

export const FooterColumn = styled.section`
    display: grid;
    grid-row-gap: ${spacingPixelsX(1.5)};
    padding: ${spacingPixelsX(3)};
    place-content: baseline;
`;

export const FooterColumnTitle = styled.h3`
    font: 500 ${spacingPixelsX(2.5)} ${fontDefault};
    color: white;
    line-height: 150%;
    margin: 0;

    @media (max-width: ${breakpoints.sm}) {
        font-size: ${spacingPixelsX(2)};
    }
`;

export const FooterLinks = styled.div`
    display: grid;
    grid-row-gap: ${spacingPixelsX(1.5)};
`;

export const FooterLink = styled.a`
    color: white;
    cursor: pointer;
    font: 400 ${spacingPixelsX(2)} ${fontDefault};
    line-height: 125%;

    @media (max-width: ${breakpoints.sm}) {
        font-size: ${spacingPixelsX(1.75)};
    }
`;
