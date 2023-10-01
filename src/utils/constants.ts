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
    description:
      "At Stable, we are committed to offering the simplest, quickest, safest, and most transparent tokenization model, which is pushing us toward issuing our own fully regulated, licensed, and transparent fiat-backed stablecoins so we are not reliant solely on third-party stablecoin issuers. By that, we have the opportunity to offer fast (almost instant) and safe tokenization with no third-party systematic risks, and transparent audits coupled with Proof of Reserve reports. However we will still support other stablecoins for minting and redeeming, but it will be more expensive and it will take more time to tokenize the chosen asset.",
  },
  {
    title: "How is Stable tapping the potential of blockchain?",
    description:
      "We are taping the potential of blockchain through Tokenization, which offers enhanced liquidity, stability, transparency, and accessibility of conventional financial assets while enabling users to take control of their tokenized assets and unleash their maximum potential.",
  },
  {
    title:
      "How is Stable maintaining the pegs and what makes our holding trustable for stablecoins and RWA’s?",
    description:
      "Each stablecoins are hard pegged to the value of 1 to the backing currency when minting and redeeming, and the backing is directly reported through Chainlink Proof of Reserve reports. The listed securities and assets that we tokenize (RWAs) will adhere to the same standards as our stablecoins when it comes to audits and Proof of Reserve reporting. A ratio of one-to-one will once again back each RWA token. Price feeds for our stablecoins and RWAs tokens are provided by Chainlink to ensure maximum accuracy and safety. If there is an on-chain depeg event, the peg can be restored thanks to Arbitrageurs buying de-pegged stablecoins and RWAs on-chain and redeeming them for peg value, or vice versa.",
  },
  {
    title:
      " What are some of the major solutions which Stable is bringing to the market?",
    description: [
      "Our objective is to broaden the range of fiat-backed stablecoins by introducing stUSD, stEUR, stCNY, and more, enabling users to diversify their stablecoin holdings, and facilitating the development of a fully functional forex market on the blockchain. Moreover, these stablecoins will offer instant usability for the fast (almost instant) tokenization of Real-World Assets (RWAs), enhancing their value proposition.",
      "Through our RWA system, we aim to tokenize real-world assets and listed securities, creating a seamless and accessible platform for buying, selling, and gaining exposure to these valuable assets.",
      "As part of our tokenization service, users will receive RWA tokens, ERC tokens directly backed and linked to the specific asset they have bought (minted). These tokens will mirror the price on the open market of the assets that are backing them 1:1, thanks to Chainlink's Oracle integration. To further enhance the utility of our RWA tokens, we plan to collaborate with industry-leading lending, CDP, and DEX protocols, allowing them to be utilized in Defi.",
    ],
  },
  {
    title:
      "What are the major regulations that Stable is complying with for smooth workings?",
    description: `Stable legal structure will consist of multiple limited liability companies (LLCs) operating across various regions, including the European Union, EMEA, and APAC. Each LLC will be subject to independent regulation by local authorities, ensuring complete compliance in the creation and operation of native currency stablecoins and our tokenization service within their respective jurisdictions. This approach enables us to provide optimized compliance solutions tailored to each operating region, enhancing regulatory adherence.

 In alignment with the MiCA regulations, we are committed to operating in full compliance and obtaining an E-Money EMI License and Investment firm license. This positions us as one of the pioneering issuers of Stablecoin and Real World Asset (RWA) tokens in the European Union, further solidifying our commitment to regulatory compliance and establishing ourselves as a trusted participant in the market.

`,
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
