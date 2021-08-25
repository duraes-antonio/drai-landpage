import styled from 'styled-components';
import {
    colors,
    fontDefault,
    spacingPixelsX,
} from '../../../../shared/styles/variables';
import { flexCenter } from '../../../../shared/styles/placeholders';

export const Card = styled.article`
    ${flexCenter};
    flex-direction: column;
    padding: ${spacingPixelsX(3)};
    background: #ffffff;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    user-select: none;
    transition-property: transform, box-shadow;
    transition-duration: 0.25s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
    }
`;

export const CardTitle = styled.h3`
    color: ${colors.grey};
    line-height: 150%;
    font-family: ${fontDefault};
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    margin: ${spacingPixelsX(0.5)} 0 0;
`;

export const CardDescription = styled(CardTitle)`
    font-size: 0.875rem;
    font-weight: 400;
    margin-top: ${spacingPixelsX(2)};
`;
