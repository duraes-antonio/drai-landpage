import { css } from 'styled-components';

export const flexYCenter = css`
    display: flex;
    align-items: center;
`;

export const flexXCenter = css`
    display: flex;
    justify-content: center;
`;

export const flexCenter = css`
    ${flexYCenter};
    ${flexXCenter}
`;
