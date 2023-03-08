import Head from "next/head";
import { Inter } from "next/font/google";

// components
import WhyUseStable from "@/components/section/WhyUseStable/WhyUseStable";
import StableCoins from "@/components/section/StableCoins/StableCoins";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Stable</title>
        <meta
          name="description"
          content="At Stable, we aim to tokenize government and corporate bonds using our fiat-backed stablecoins with our tokenizing mechanism. This will allow us to bring bonds and real yield to the blockchain, making them accessible to the masses. In the subsequent stages, we plan to tokenize additional real-world assets and ensure that everyone has equal access to them. Our goal is to promote greater financial transparency, liquidity, and stability."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="sidelined-image-container">
          <img
            src="/images/sidelined-image.svg"
            alt="sidelined-image"
            className="sidelined-image"
          />
        </div>
        <WhyUseStable />
        <StableCoins />
      </main>
    </>
  );
}
