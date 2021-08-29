export const colors = {
    grey: 'rgba(128, 128, 128, .78)',
    grey5: '#FBFBFB',
    lightgrey: '#D3D3D3',
    darkgrey: '#696969',
    primary: 'rgba(30, 144, 255, 0.75)',
    red: 'rgba(210, 0, 0, 1)',
    red60: 'rgba(210, 0, 0, 0.6)',
};

export const fontDefault = "'Raleway', 'Mulish', sans-serif";

export const breakpoints = {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
};

export const spacing = 0.5;
export const remInPixels = 16;

export const pxToRem = (nPixels: number, oneRemInPixels = remInPixels) =>
    `${nPixels / oneRemInPixels}rem`;

export const spacingPixelsX = (n = 1) => `${n * spacing}rem`;
