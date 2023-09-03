import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import JoinWaitlist from "@/components/common/JoinWaitlist/JoinWaitlist";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stable</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stable" />
        <meta
          property="og:description"
          content="Providing Access to Securities and Real-World Assets"
        />
        <meta
          property="og:image"
          content="https://stable-landing-page.s3.eu-central-1.amazonaws.com/stable-banner.png"
        />
        <meta property="og:url" content="https://stablefinance.co/" />
        <meta name="twitter:image:alt" content="Stable" />
        <meta property="twitter:url" content="https://stablefinance.co/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stable" />
        <meta
          name="twitter:description"
          content="Providing Access to Securities and Real-World Assets"
        />
        <meta
          name="twitter:image"
          content="https://stable-landing-page.s3.eu-central-1.amazonaws.com/stable-banner.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <ToastContainer autoClose={false} theme="dark" position="top-center" />
      <Header />
      <Component {...pageProps} />
      <JoinWaitlist />
      <Footer />
    </>
  );
}
