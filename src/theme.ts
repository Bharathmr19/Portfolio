import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#FFFFFF',
  secondary_background: '#f8f9fa',
  text: '#2d3436',
  primary: '#0984e3',
  secondary: '#636e72',
  accent: '#00cec9',
  gradient: 'linear-gradient(135deg, #0984e3 0%, #00cec9 100%)',
};

export const darkTheme = {
  background: '#1a1a1a',
  secondary_background: '#2d3436',
  text: '#FFFFFF',
  primary: '#74b9ff',
  secondary: '#b2bec3',
  accent: '#00cec9',
  gradient: 'linear-gradient(135deg, #74b9ff 0%, #00cec9 100%)',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s linear;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 5px;
  }
`;
