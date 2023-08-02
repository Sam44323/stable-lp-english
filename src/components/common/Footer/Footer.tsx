import React from "react";
import Image from "next/image";
import {
  FOOTER_IMAGES,
  FOOTER_LINKS_A,
  FOOTER_LINKS_B,
  FOOTER_LINKS_C,
} from "@/utils/constants";

const Footer: React.FC = () => {
  return (
    <div className="w-full min-h-[10px] bg-blue-btn">
      <div>
        <section></section>
        <section></section>
      </div>
    </div>
  );
};

export default Footer;

/**
 *   {[FOOTER_LINKS_A, FOOTER_LINKS_B, FOOTER_LINKS_C].map(
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
 */
