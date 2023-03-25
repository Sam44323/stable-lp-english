import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.FooterContainer}>
      <section className={styles.TopContainer}>
        <div className={styles.Content}>
          <Image
            src="/images/header-icon-stable.svg"
            height={100}
            width={190}
            alt="stable-img"
            priority
          />
          <div>
            <a>Stable Protocol</a>
            <a>Governance</a>
            <a>Docs</a>
            <a>Security</a>
            <a>FAQ</a>
          </div>
        </div>
      </section>
      <section className={styles.BottomContainer}></section>
    </div>
  );
};

export default Footer;
