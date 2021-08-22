import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';

const Container = styled.nav`
    background-color: ${colors.grey5};
    height: 76px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

function Navbar(): JSX.Element {
    return <Container />;
}

export default memo(Navbar);
