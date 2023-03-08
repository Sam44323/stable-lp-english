import React from "react";
import styles from "./Bonds.module.scss";

const Bonds: React.FC = () => {
  return (
    <div className={styles.CoreContainer} id="bonds">
      <section className={styles.MainDataContainer}>
        <div>
          <h1>Bond mechanism</h1>
          <p>
            Each bond has it's own staking contract, where it is possible to
            stake just our stablecoins (StUSD, StEUR...). When you stake to a
            specific bond-contract you like, the stablecoins are burned, which
            frees up the underlying cash reserve and thus we use that amount to
            purchase the specific bond and just generating a bond token for you.
            <br />
            <br />
            The same logic applies when you want to leave, we sell the bonds
            back to the issuer on the free market and mint out stablecoins based
            on how much the bonds are worth.
          </p>
        </div>
        <img src="/images/straight-gear.svg" alt="straight-gear" />
      </section>
      <section className={styles.CommonContainerStyles}>
        <div className={styles.Data}>
          <h1>How to qualify for Bond Staking?</h1>
          <p>
            Bond staking could be used by anyone who holds our stablecoins as to
            "purchase" bonds, they will need to stake our stablecoins to a
            specific staking pool.
            <br />
            <br />
            There will be an unique staking contract for each treasury bond
            (3mo, 6mo, 1yr and etc...) and corporate-bonds
          </p>
          <img src="/images/bond-image.svg" alt="bond-image" />
        </div>
      </section>
    </div>
  );
};

export default Bonds;
