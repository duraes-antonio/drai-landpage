import { createTheme } from '@material-ui/core';
import { blue, grey, red } from '@material-ui/core/colors';

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
