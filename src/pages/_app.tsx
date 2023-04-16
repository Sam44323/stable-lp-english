import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XH1E4LH0QB');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
