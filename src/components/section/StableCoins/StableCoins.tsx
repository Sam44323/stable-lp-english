import React from "react";
import styles from "./StableCoins.module.scss";

const StableCoins: React.FC = () => {
  return (
    <div className={styles.CoreContainer}>
      <section className={styles.MainDataContainer}>
        <div>
          <h1>Stablecoin mechanism</h1>
          <p>
            All Stable tokens are pegged at 1:1 with a matching fiat currency
            (e.g. 1StUSD = 1USD, 1StEUR = EUR and so on...) and are fully backed
            by our reserves which are frequently audited with publicly available
            Proof Of Reserve(PoR) Reports. The reserves match or exceeds the
            amount required to redeem all Stable tokens in circulation. You will
            always get 1:1 coin-to-asset backings even if there's an on-chain
            depeg event
          </p>
        </div>
        <img src="/images/grouped-gear.svg" alt="grouped-gear" />
      </section>
      <section className={styles.CommonContainerStyles}>
        <div className={styles.Data}>
          <h1>How to get stablecoins?</h1>
          <p>
            They way to acquire our stablecoins is effortless, you have two
            options. First is to create an account on our platform, pass AML &
            KYC checks and then you'll receive stablecoins based on the amount
            of fiat you wire to us.
            <br />
            <br />
            The second is to swap to our stablecoins (StUSD, StEUR...) on DEXes
            or{" "}
            <a href="https://curve.fi/" target="_blank">
              Curve.fi
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default StableCoins;
