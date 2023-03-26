import styles from "../components/common/Header/Header.module.scss";

export const FOOTER_IMAGES = [
  {
    link: "https://www.linkedin.com/company/stablefi/",
    alt: "linkedin-image",
    src: "/images/linkedin-image.svg",
    name: "Linkedin",
  },
  {
    link: "https://twitter.com/Stable_fi",
    alt: "twitter-image",
    src: "/images/twitter-image.svg",
    name: "Twitter",
  },
  {
    link: "https://medium.com/stable-finance",
    alt: "medium-image",
    src: "/images/medium-image.svg",
    name: "Medium",
  },
  {
    link: "https://github.com/Stable-crypto",
    alt: "github-image",
    src: "/images/github-image.svg",
    name: "Github",
  },
  {
    link: "https://stable-3.gitbook.io/whitepaper/",
    alt: "gitbook-image",
    src: "/images/gitbook-image.svg",
    name: "Gitbook",
  },
];

export const NORMAL_LINKS = [
  {
    name: "How Does It Work?",
    href: "#how-does-it-work",
    classNames: [styles.LinkText],
  },
  {
    name: "STABLE Stablecoins",
    href: "#stablecoins",
    classNames: [styles.LinkText],
  },
  {
    name: "STABLE Bonds",
    href: "#bonds",
    classNames: [styles.LinkText],
  },
];

export const AUTH_LINKS = [
  {
    name: "Whitepaper",
    href: "https://stable-3.gitbook.io/whitepaper/",
    classNames: [styles.LinkText],
  },
  {
    name: "STABLE App",
    href: "/auth/signup",
    classNames: [styles.LinkText, styles.AuthLinkBgButton],
  },
];

export const IMAGE_CONTENT = [
  "/images/ethereum-icon.svg",
  "/images/fantom-icon.svg",
  "/images/polygon-icon.svg",
  "/images/avalanche-icon.svg",
];

export const REGULATION_IMAGE_CONTENT = [
  "/images/kyc-image.svg",
  "/images/cft-image.svg",
  "/images/aml-image.svg",
];

export const FOOTER_LINKS_A = [
  {
    name: "Bug Bounty",
    link: "",
  },
  {
    name: "Whitepaper",
    link: "https://stable-3.gitbook.io/whitepaper/",
  },
  {
    name: "Tokenomics",
    link: "https://stable-3.gitbook.io/whitepaper/core-tokennomics",
  },
];

export const FOOTER_LINKS_B = [
  {
    name: " Careers",
    link: "",
  },
  {
    name: "Blog",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

export const FOOTER_LINKS_C = [
  {
    name: "Terms Of Use",
    link: "",
  },
  {
    name: "Privacy Policy",
    link: "",
  },
  {
    name: "Candidate Privacy",
    link: "",
  },
];
