import "../styles/reset.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import Layout from "@/components/Layout";
import theme from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
