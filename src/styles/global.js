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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    color: #0f172a;
    background-color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  /* Variáveis CSS globais - Tema Verde Sustentável */
  :root {
    /* Colors - Green Ecosystem */
    --color-primary: #059669;        /* Emerald 600 - Crescimento sustentável */
    --color-primary-dark: #047857;   /* Emerald 700 - Estabilidade */
    --color-primary-light: #10b981;  /* Emerald 500 - Energia */
    
    /* Secondary - Deep Forest */
    --color-secondary: #064e3b;      /* Emerald 900 - Autoridade ambiental */
    --color-secondary-light: #065f46; /* Emerald 800 */
    
    /* Accent - Energy Orange (sustentável) */
    --color-accent: #f59e0b;         /* Amber 500 - Energia renovável */
    --color-accent-light: #fbbf24;   /* Amber 400 */
    
    /* Success & Growth */
    --color-success: #22c55e;        /* Green 500 - Sucesso sustentável */
    
    /* Neutrals - Clean & Pure */
    --color-neutral-50: #f8fafc;
    --color-neutral-100: #f1f5f9;
    --color-neutral-200: #e2e8f0;
    --color-neutral-300: #cbd5e1;
    --color-neutral-400: #94a3b8;
    --color-neutral-500: #64748b;
    --color-neutral-600: #475569;
    --color-neutral-700: #334155;
    --color-neutral-800: #1e293b;
    --color-neutral-900: #0f172a;
    
    --color-white: #ffffff;
    --color-black: #0f172a;

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-green: 0 20px 40px rgba(5, 150, 105, 0.3);

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;

    /* Border Radius */
    --radius-sm: 4px;
    --radius: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-full: 50%;

    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
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

  /* Animações de entrada mais específicas */
  .fade-in-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-in-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .fade-in-right {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .scale-in {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .scale-in.visible {
    opacity: 1;
    transform: scale(1);
  }

  /* Loading states */
  .loading {
    opacity: 0.7;
    pointer-events: none;
  }

  /* Focus states for accessibility */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Scrollbar customization */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-neutral-100);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-neutral-400);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  /* Selection color */
  ::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  /* Responsive font sizes */
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

  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (min-width: 1900px) {
      max-width: 1400px;
    }

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Green theme specific utilities */
  .text-primary {
    color: var(--color-primary);
  }

  .text-secondary {
    color: var(--color-secondary);
  }

  .text-success {
    color: var(--color-success);
  }

  .bg-primary {
    background-color: var(--color-primary);
  }

  .bg-secondary {
    background-color: var(--color-secondary);
  }

  .bg-success {
    background-color: var(--color-success);
  }

  .gradient-primary {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  }

  .gradient-secondary {
    background: linear-gradient(135deg, var(--color-secondary), var(--color-primary-dark));
  }

  /* Button reset */
  .btn-reset {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  /* Screen reader only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default GlobalStyle;