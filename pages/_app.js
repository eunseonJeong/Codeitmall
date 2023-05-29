import Container from "@/components/Container";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";
export default function App({ Component, pageProps }) {
  //공통적으로 컴포넌트 적용하고 싶을 때 사용
  return (
    <ThemeProvider>
      <Header />
      <Container>
        <Component {...pageProps} />;
      </Container>
    </ThemeProvider>
  );
}
