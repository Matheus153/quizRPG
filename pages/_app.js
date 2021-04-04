import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme =  {
  colors: {
    primary: "#222222",
    secondary: "#6F05C0",
    mainBg: "#202020",
    contrastText: "#fefef3",
    wrong: "#FF4d22",
    success: "#4CAF50"
  },
  borderRadius: "8px",
  quizlogo: "https://dewey.tailorbrands.com/production/brand_version_mockup_image/298/4605243298_545beea1-9f67-44b1-bd55-710f841a163d.png?cb=1612835865",
  quizlogo2: "https://dewey.tailorbrands.com/production/brand_version_mockup_image/792/4611444792_e5c61721-d613-4d5f-9ac5-18c9003dbb65.png?cb=1612905441"
}

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Quiz BTS</title>
          <link rel="icon" href="https://img.icons8.com/nolan/2x/bts-logo.png" />
        </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
