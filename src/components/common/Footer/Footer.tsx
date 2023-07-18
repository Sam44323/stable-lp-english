import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import {
  FOOTER_IMAGES,
  FOOTER_LINKS_A,
  FOOTER_LINKS_B,
  FOOTER_LINKS_C,
} from "@/utils/constants";

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
              <div className={styles.Links} key={index}>
                <a href={image.link} target="_blank" rel="noopener" key={index}>
                  <Image
                    src={image.src}
                    height={40}
                    width={40}
                    alt={image.alt}
                  />
                </a>
                <p>{image.name}</p>
              </div>
            ))}
          </section>
          <section className={styles.RightContainer}>
            {[FOOTER_LINKS_A, FOOTER_LINKS_B, FOOTER_LINKS_C].map(
              (item, index) => (
                <div key={index} className={styles.FooterLinksContainer}>
                  {item.map((link, index) => (
                    <a href={link.link} key={index}>
                      {link.name}
                    </a>
                  ))}
                </div>
              )
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Footer;
