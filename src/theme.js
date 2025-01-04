import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2C3639',
    },
    secondary: {
      main: '#A27B5C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9F9F9',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Times New Roman", serif',
    h1: {
      fontWeight: 600,
      fontSize: '4rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
      letterSpacing: '-0.01em',
    },
    body1: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1.1rem',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#DCD7C9',
    },
    secondary: {
      main: '#A27B5C',
    },
    background: {
      default: '#2C3639',
      paper: '#3F4E4F',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Times New Roman", serif',
    h1: {
      fontWeight: 600,
      fontSize: '4rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
      letterSpacing: '-0.01em',
    },
    body1: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1.1rem',
    },
  },
});