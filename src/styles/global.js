// src/styles/global.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
    color: #333;
    background-color: #f9fafb;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  /* Classes de animação para elementos que aparecem no scroll */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Adapt for large screens */
  @media (min-width: 1900px) {
    html {
      font-size: 18px;
    }
  }

  /* Adapt for tablet */
  @media (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }

  /* Adapt for mobile */
  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;