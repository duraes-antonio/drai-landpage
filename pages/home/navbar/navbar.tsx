import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import SvgLogo from '../../../shared/components/svg/logo';
import {
    ButtonContained,
    ButtonOutlined,
} from '../../../shared/components/buttons/buttons';

const Container = styled.nav`
    background-color: ${colors.grey5};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 32px;
`;

const ActionsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 16px;
    justify-self: flex-end;
`;

function Navbar(): JSX.Element {
    return (
        <Container>
            <SvgLogo height={'30px'} style={{ height: 42 }} />
            <ActionsArea>
                <ButtonOutlined>Registrar-se</ButtonOutlined>
                <ButtonContained>Entrar</ButtonContained>
            </ActionsArea>
        </Container>
    );
}

export default memo(Navbar);
