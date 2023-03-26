import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { FOOTER_IMAGES } from "@/utils/constants";

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
      <section className={styles.BottomContainer}>
        <div className={styles.Content}>
          <section className={styles.LeftContainer}>
            {FOOTER_IMAGES.map((image, index) => (
              <a href={image.link} target="_blank" rel="noopener" key={index}>
                <Image src={image.src} height={40} width={40} alt={image.alt} />
              </a>
            ))}
          </section>
          <section className={styles.RightContainer}></section>
        </div>
      </section>
    </div>
  );
};

export default Footer;
