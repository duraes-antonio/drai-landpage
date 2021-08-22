import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme } from '@material-ui/core';
import { blue, grey, red } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: grey[600],
        },
        error: {
            main: red[600],
        },
    },
    typography: {
        fontFamily: [
            'Mulish',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
