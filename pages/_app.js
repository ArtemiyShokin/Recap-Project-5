import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/Index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
