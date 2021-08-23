import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './home/navbar/navbar';
import { HomePage } from './home/home';
import styled, { css } from 'styled-components';
import { theme } from '../shared/styles/themes';
import '../shared/styles/globals.css';

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
    padding: 48px 40px;
`;

const Content = styled.div`
    ${centerFlexStyle};
    background-color: #fdfdfd;
    min-height: 100vh;
    margin-top: 60px;
`;

export function MainApp() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Content>
                <PageWrapper>
                    <HomePage />
                </PageWrapper>
            </Content>
        </ThemeProvider>
    );
}

export default MainApp;
