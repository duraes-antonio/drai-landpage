import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './home/navbar/navbar';
import HomePage from './home/home';
import styled, { css } from 'styled-components';
import { theme } from '../shared/styles/themes';
import '../shared/styles/globals.css';
import Footer from './home/footer/footer';
import React, { CSSProperties } from 'react';
import { spacingPixelsX } from '../shared/styles/variables';
import { ServerModal } from '../shared/components/modal-wrapper/modal-wrapper';
import { ModalProvider } from '../shared/contexts/modal-context';

const centerFlexStyle = css`
    display: flex;
    justify-content: center;
`;

const PageWrapper = styled.div`
    ${centerFlexStyle};
    width: 100%;
    max-width: min(92%, 1048px);
    box-sizing: border-box;
    min-height: 100vh;
    height: 100%;
    background-color: #ffffff;
    padding: ${spacingPixelsX(6)} ${spacingPixelsX(5)};
`;

const FooterWrapper = styled.div`
    ${centerFlexStyle};
    background-color: rgba(30, 144, 255, 0.68);
    box-sizing: border-box;
    min-width: 100%;
`;

const Content = styled.div`
    ${centerFlexStyle};
    background-color: #fdfdfd;
    min-height: 100vh;
    margin-top: 60px;
`;

const footerStyle: CSSProperties = {
    maxWidth: 'min(92%, 1048px)',
};

const Header = styled.header`
    height: 70px;
`;

export function MainApp() {
    return (
        <ModalProvider>
            <ServerModal />
            <ThemeProvider theme={theme}>
                <Header>
                    <Navbar />
                </Header>

                <Content>
                    <PageWrapper>
                        <HomePage />
                    </PageWrapper>
                </Content>
                <FooterWrapper>
                    <Footer style={footerStyle} />
                </FooterWrapper>
            </ThemeProvider>
        </ModalProvider>
    );
}

export default MainApp;
