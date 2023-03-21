import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="42 是国内首个基于 Web3 的信息分享平台。用户即股东，分享真实有效的信息即可获得 TOKEN。更多好玩功能敬请探索...." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
