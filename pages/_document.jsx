import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic-reset.css"
          />
          <script
            type="text/javascript"
            src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
