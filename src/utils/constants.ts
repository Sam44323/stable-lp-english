export const FOOTER_IMAGES = [
  {
    link: "https://www.linkedin.com/company/stablefi/",
    alt: "linkedin-image",
    src: "/images/logo/footer-linkedin.png",
    name: "Linkedin",
  },
  {
    link: "https://twitter.com/StableFinanceCo",
    alt: "twitter-image",
    src: "/images/logo/footer-twitter.png",
    name: "Twitter",
  },
  {
    link: "https://medium.com/stable-finance",
    alt: "medium-image",
    src: "/images/logo/footer-medium.png",
    name: "Medium",
  },
  {
    link: "https://github.com/Stable-crypto",
    alt: "github-image",
    src: "/images/logo/footer-github.png",
    name: "Github",
  },
  {
    link: "https://stable-3.gitbook.io/whitepaper/",
    alt: "gitbook-image",
    src: "/images/logo/footer-gitbook.png",
    name: "Gitbook",
  },
];

export const HEADER_LINK = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "RWA",
    href: "/rwa",
  },
  {
    name: "Stablecoins",
    href: "/stablecoins",
  },
];

export const DROPDOWN_LINKS = [
  {
    name: "veSTE",
    href: "/veSTE",
  },
  {
    name: "Swap",
    href: "/swap",
  },
  {
    name: "Bridge",
    href: "/bridge",
  },
];

export const TOP_FOOTER_LINK = [
  { name: "Stable Protocol", link: "/coming-soon" },
  { name: "Governance", link: "/coming-soon" },
  { name: "Docs", link: "/coming-soon" },
  { name: "Security", link: "/coming-soon" },
  { name: "FAQ", link: "/coming-soon" },
];

export const FOOTER_LINKS_A = [
  {
    name: "Bug Bounty",
    link: "/coming-soon",
  },
  {
    name: "Litepaper",
    link: "https://drive.google.com/file/d/1b7e9q9maOUnX_pDK3zInGSG5LWAJjo-G/view?usp=sharing",
  },
  {
    name: "Tokenomics",
    link: "https://stable-3.gitbook.io/whitepaper/core-tokennomics",
  },
];

export const FOOTER_LINKS_B = [
  {
    name: "Careers",
    link: "/coming-soon",
  },
  {
    name: "Blog",
    link: "/coming-soon",
  },
  {
    name: "Contact",
    link: "/coming-soon",
  },
];

export const FOOTER_LINKS_C = [
  {
    name: "Term Of Use",
    link: "/coming-soon",
  },
  {
    name: "Privacy Policy",
    link: "/coming-soon",
  },
  {
    name: "Candidate Privacy",
    link: "/coming-soon",
  },
];

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URI;

export const FAQ_DATA = [
  {
    title: "Why is Stable introducing its own stablecoins?",
    description: [
      "Stable is committed to transparently providing the most swift, secure and simple tokenization model.",
      "To build the very best product and experience for our customers and users, we avoid sole dependency on third-party stablecoin issuers by issuing our own fully regulated, licensed, and transparent fiat-backed stablecoins.",
      "Our STABLEcoins enjoy transparent audits coupled with Proof of Reserve reports, and allow the provision of near instant, secure tokenization without systematic third-party risks.",
      "Stable still supports other stablecoins for minting and redeeming, but use of our own STABLEcoins provides the swiftest, cheapest and most frictionless method of tokenizing chosen assets.",
    ],
  },
  {
    title: "How is Stable tapping blockchain’s full potential?",
    description: [
      "Stable’s tokenization platform and offer allows our users to discover and enjoy enhanced liquidity, stability, transparency, and accessibility to conventional financial assets.",
      "The power of blockchain gives our users 24/7, 365 days a year access to global financial markets with improved control and flexibility.",
    ],
  },
  {
    title:
      "How is Stable ensuring peg maintenance and trustable holding maintenance for RWAs and our STABLEcoins?",
    description: [
      "STABLEcoins are hard pegged to the value of 1 to the backing currency when minting and redeeming, a 1:1 ratio also backs each RWA token.",
      "The listed securities and assets that we tokenize (RWAs) will adhere to the same standards as our STABLEcoins when it comes to audits and Proof of Reserve reporting.",
      "If there is an on-chain depeg event, the peg can be restored thanks to Arbitrageurs buying de-pegged stablecoins and RWAs on-chain and redeeming them for peg value.",
    ],
  },
  {
    title:
      "How do Stable’s solutions and platform transform financial instrument access and management?",
    description: [
      "Our objective is to broaden the range of fiat-backed stablecoins by introducing stUSD, stEUR, stCNY and more, enabling users to diversify their stablecoin holdings, facilitating development of a fully functional, blockchain native forex market.",
      "Moreover, these stablecoins offer near-instant tokenization of Real-World Assets (RWAs), enhancing their value proposition.",
      "Stable’s goal is also to tokenize real-world assets and listed securities via our RWA system, creating a frictionless platform for buying, selling and gaining exposure to these valuable assets.",
      "As part of our tokenization service, users will receive RWA tokens, ERC tokens directly backed and linked to the specific asset they have bought (minted).",
      "These tokens will mirror the price on the open market of the assets that are backing them 1:1.",
    ],
  },
  {
    title:
      "What major regulations does STABLE comply with to ensure maximum levels of compliance and security?",
    description: [
      "Stable commits to adhere to all relevant legislation, including the framework of The Markets in Crypto-Assets Regulation (MiCA), which institutes uniform EU market rules for crypto-assets.",
      "The regulation covers crypto-assets that are not currently regulated by existing financial services legislation. Key provisions for those issuing and trading crypto-assets (including asset-referenced tokens and e-money tokens) cover transparency, disclosure, authorization, and supervision of transactions.",
      "Furthermore, Stable is in the process of obtaining an Electronic Money Institution (EMI) license alongside an investment firm license.",
    ],
  },
];

export const STABLECOINS_FEATURES = [
  {
    src: "/images/logo/deposit-fiat.png",
    title: "Deposit Fiat Currency",
    description: "Deposit fiat currency to Stable platform. ",
  },
  {
    src: "/images/logo/currency-custody.png",
    title: "Currency Custody",
    description: "Stable will custody the currency for Reserves",
  },
  {
    src: "/images/logo/get-stablecoins.png",
    title: "Get Stablecoins",
    description: "Get coin in a 1:1 ratio on blockchain.",
  },
];

export const PLATFORM_FEATURES_LIST = [
  "Unleash the maximum potential of your preferred Equities, Bonds, ETFs and more with the power of your chosen blockchain.",
  "Expand your financial horizons with the best that blockchain and DeFi can offer.	Mint held or targeted assets with whitelisted fiat-backed STABLEcoins such as USDC or USDT.",
  "Use STABLE's own STABLEcoins for the most frictionless minting and redemption experience.",
  "Discover TaaS from STABLE - Harness the power of blockchain to increase your financial freedom.",
];
