import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./WhyUseStable.module.scss";

const IMAGE_CONTENT = [
  "/images/ethereum-icon.svg",
  "/images/fantom-icon.svg",
  "/images/polygon-icon.svg",
  "/images/avalanche-icon.svg",
];

const REGULATION_IMAGE_CONTENT = [
  "/images/kyc-image.svg",
  "/images/cft-image.svg",
  "/images/aml-image.svg",
];

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
      <section
        className={classNames(
          styles.CommonContainerStyles,
          styles.MultiChainContainer
        )}
      >
        <div className={styles.Data}>
          <h1>We are multichain!</h1>
          <p>
            Stable tokens & staking pools are built to be multichain to offer
            easy adoption and integration. Supported chains are Ethereum,
            Polygon, Avalanche, Fantom and other EVM-compatible chains.
          </p>
          <div className={styles.ImageFlexContainer}>
            {IMAGE_CONTENT.map((image, index) => (
              <img src={image} key={index} alt={image} />
            ))}
          </div>
        </div>
        <img
          src="/images/circle.svg"
          alt="circle"
          className={styles.CircleImage}
        />
      </section>
      <section
        className={classNames(
          styles.CommonContainerStyles,
          styles.RegulatoryCompliances
        )}
      >
        <div className={styles.Data}>
          <h1>Regulatory Compliance</h1>
          <p>
            At Stable, we are maintaining world-class standardized compliance
            measures for anti-money laundering (AML), countering the finance of
            terrorism (CFT), sanctions, and know-your-customer (KYC) laws and
            regulations in all jurisdiction we are operating in to ensure
            everything is legal and safe
          </p>
          <div className={styles.ImageFlexContainer}>
            {REGULATION_IMAGE_CONTENT.map((image, index) => (
              <img src={image} key={index} alt={image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUseStable;
