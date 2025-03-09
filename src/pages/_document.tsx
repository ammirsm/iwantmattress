import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="iwantmattress.ca - Find the perfect mattress for your needs in Canada" />
        <meta property="og:title" content="iwantmattress.ca" />
        <meta property="og:description" content="Find the perfect mattress for your needs in Canada" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iwantmattress.ca" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="iwantmattress.ca" />
        <meta name="twitter:description" content="Find the perfect mattress for your needs in Canada" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 