import React, { memo } from 'react';
import styled from 'styled-components';
import BodySections from './body/body-sections';

const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    height: 100%;
`;

export function HomePage(): JSX.Element {
    return (
        <Main>
            <BodySections />
        </Main>
    );
}

export default memo(HomePage);
