// src/styles/styles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1a1a2e;
    --color-secondary: #e31937;
    --color-accent: #16213e;
    --color-background: #FFFFFF;
    --color-white: #FFFFFF;
    --color-gray: #9CA3AF;
    --color-text: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Roboto', 'Helvetica Neue', sans-serif;
  }

  html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    min-height: 100%;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Adiciona uma transição suave para todos elementos interativos */
  a, button {
    transition: all 0.3s ease;
  }

  /* Media queries para responsividade */
  @media (min-width: 1900px) {
    html {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;