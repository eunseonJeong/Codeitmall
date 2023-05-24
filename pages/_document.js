import { Html, Head, Main, NextScript } from "next/document";
//서버에서 렌더링 할때만 실행, 클라이언트 사이드에선 실행하지 x,js 코드는 작동하지 않음.
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
