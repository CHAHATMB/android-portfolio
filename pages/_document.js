// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          {/* You can also use a PNG file if you prefer */}
          {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
          {/* For Apple touch icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          {/* Add more icon sizes as needed */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-96x96.png"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
