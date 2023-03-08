import React from "react";
import Image from "next/image";
import styles from "./WhyUseStable.module.scss";

const WhyUseStable: React.FC = () => {
  return (
    <div className={styles.CoreContainer}>
      <section className={styles.TopContainer}>
        <h1>Why Use Stable?</h1>
        <div>
          <p>
            With stablecoins from Stable(StUSD, StEUR), you will gain access to
            variety of financial products like government & corporate bonds,
            investment funds, ETF's, and many others. As a company, our coins
            are much more than just coins
          </p>
          <Image
            src="/images/stable-why-use.svg"
            height={300}
            width={300}
            alt="stable-icon"
            className={styles.WhyUseImage}
          />
        </div>
      </section>
    </div>
  );
};

export default WhyUseStable;
