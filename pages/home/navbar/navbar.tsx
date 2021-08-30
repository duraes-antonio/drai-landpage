import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { colors, spacingPixelsX } from '../../../shared/styles/variables';
import SvgLogo from '../../../shared/components/svg/logo';
import {
    ButtonContained,
    ButtonOutlined,
} from '../../../shared/components/buttons/buttons';
import { ModalContext } from '../../../shared/contexts/modal-context';
import { ModalUserRegister } from '../../../shared/components/modal-contents/modal-user-register';

const Container = styled.nav`
    background-color: ${colors.grey5};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px ${spacingPixelsX(4)};
    position: fixed;
    min-width: 100vw;
    z-index: 1;
    top: 0;
`;

const ActionsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: ${spacingPixelsX(2)};
    justify-self: flex-end;
`;

function Navbar(): JSX.Element {
    const { setConfig } = useContext(ModalContext);
    return (
        <Container>
            <SvgLogo height={'30px'} style={{ height: 42 }} />
            <ActionsArea>
                <ButtonOutlined
                    onClick={() =>
                        setConfig?.({
                            content: <ModalUserRegister />,
                        })
                    }
                >
                    Registrar-se
                </ButtonOutlined>
                <ButtonContained>Entrar</ButtonContained>
            </ActionsArea>
        </Container>
    );
}

export default memo(Navbar);
