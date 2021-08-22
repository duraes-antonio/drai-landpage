import React, { memo } from 'react';
import styled from 'styled-components';
import Navbar from './navbar/navbar';

const Title = styled.h1`
    color: red;
    border: 2px solid blue;
    box-sizing: border-box;
`;

export function HomePage(): JSX.Element {
    return (
        <div>
            <Navbar />
            <Title>Hello world!</Title>
        </div>
    );
}

export default memo(HomePage);
