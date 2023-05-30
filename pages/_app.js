import Container from "@/components/Container";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";
import Head from "next/head";
import Link from "next/link";
export default function App({ Component, pageProps }) {
  //공통적으로 컴포넌트 적용하고 싶을 때 사용
  return (
    <>
      <Head>
        <title>Codeitmall </title>
        <link rel="icon" href="/스페이스.png" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />;
        </Container>
      </ThemeProvider>
    </>
  );
}
