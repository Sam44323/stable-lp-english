import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.FooterContainer}>
      <img src="/images/footer-image.svg" />
    </div>
  );
};

export default Footer;
