import React from "react";
import Image from "next/image";
import { FOOTER_IMAGES, TOP_FOOTER_LINK } from "@/utils/constants";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="w-full min-h-[10px] bg-blue-btn">
      <div className="max-w-[1290px] mx-auto pt-14 px-5 pb-10">
        <section className="flex flex-row justify-between">
          <img
            src="/images/logo/stable-footer-logo.png"
            height={140}
            width={140}
          />
          <div className="flex justify-between flex-[0.5]">
            {TOP_FOOTER_LINK.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-white no-underline font-be-vietnam-pro font-300 text-sm hover:cursor-pointer hover:bg-blue-pillBtn hover:text-white px-2 py-1 rounded-md transition-all duration-100 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <div>
            <p className="text-white font-work-sans my-4 font-300 text-sm">
              Be part of our community!
            </p>
            <div
              className="flex flex-row justify-between max-w-[180px]
            "
            >
              {FOOTER_IMAGES.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="hover:cursor-pointer hover:scale-110 hover:transition-all duration-100 ease-in-out"
                >
                  <Image src={item.src} height={30} width={30} alt={item.alt} />
                </Link>
              ))}
            </div>
          </div>
          <div></div>
        </section>
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
