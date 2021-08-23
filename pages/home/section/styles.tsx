import styled from 'styled-components';
import {
    breakpoints,
    colors,
    spacingPixelsX,
} from '../../../shared/styles/variables';

export const Container = styled.section`
    display: grid;
    grid-template-columns: 6fr 5fr;
    grid-column-gap: min(8%, 100px);
    place-content: center;
    place-items: center;

    @media (max-width: ${breakpoints.sm}) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const Texts = styled.div`
    display: grid;
    grid-row-gap: ${spacingPixelsX()};

    @media (max-width: ${breakpoints.sm}) {
        order: 2;
        grid-row-gap: ${spacingPixelsX(1.5)};
    }
`;

export const Title = styled.h2`
    font-size: 2rem;
    line-height: 150%;
    text-align: left;
    font-weight: 600;
    color: ${colors.grey};
    margin: 0;

    @media (max-width: ${breakpoints.md}) {
        font-size: 1.25rem;
    }
`;

export const Description = styled(Title)`
    font-size: 1.15rem;
    font-weight: 400;

    @media (max-width: ${breakpoints.md}) {
        font-size: 1rem;
    }
`;

export const ImageWrapper = styled.div`
    max-width: 400px;
    width: 100%;
    height: auto;
    min-height: 240px;
    position: relative;

    @media (max-width: ${breakpoints.sm}) {
        order: 1;
        min-height: 200px;
        margin-bottom: ${spacingPixelsX(3)};
    }
`;
