export const FOOTER_IMAGES = [
  {
    link: "https://www.linkedin.com/company/stablefi/",
    alt: "linkedin-image",
    src: "/images/linkedin-image.svg",
    name: "Linkedin",
  },
  {
    link: "https://twitter.com/StableFinanceCo",
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
  },
  {
    name: "STABLE Stablecoins",
    href: "#stablecoins",
  },
  {
    name: "STABLE Bonds",
    href: "#bonds",
  },
];

export const AUTH_LINKS = [
  {
    name: "Whitepaper",
    href: "https://stable-3.gitbook.io/whitepaper/",
  },
  {
    name: "STABLE App",
    href: "/auth/signup",
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
  {
    name: "veSTE",
    href: "/veSTE",
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

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URI;

export const FAQ_DATA = [
  {
    title: "Why is Stable introducing its own stablecoins?",
    description:
      "Stable aims to enhance the platform by providing users with the following benefits: the introduction of stablecoins other than USD, the ability to directly tokenize financial assets using Stable's stablecoins, improved security for end users through Proof of Reserves (POR) and regular audits conducted by trusted auditors, swift minting and redeeming of Real-World Assets (RWAs), the opportunity to diversify from Tether to a regulated stablecoin under the Markets in Crypto-Assets Regulation (MiCA), and greater flexibility for institutions seeking to tokenize assets directly through our Tokenization as a service platform.",
  },
  {
    title: "How is Stable tapping the potential of blockchain?",
    description: "",
  },
  {
    title:
      "How is Stable maintaining the pegs and what makes our holding trustable for stablecoins and RWA’s?",
    description:
      "Through Stable's tokenization service, users will receive RWA tokens, which are ERC tokens directly tied to and backed by the specific asset they have bought with our stablecoins, representing their ownership. These tokens will mirror the asset's price on the open market of assets that are backing them 1:1, facilitated by an oracle provided by Chainlink. We are committed to partnering with prominent lending and CDP protocols to establish our RWA tokens as eligible collateral, expanding their utility and accessibility.",
  },
  {
    title:
      " What are some of the major solutions which Stable is bringing to the market?",
    description: [
      "Stable's objective is to broaden the range of fiat-backed stablecoins by introducing stUSD, stEUR, stCNY, and more, enabling users to diversify their stablecoin holdings and facilitating the development of a fully functional forex market on the blockchain. Moreover, these stablecoins will offer instant usability by granting access to the tokenization of Real-World Assets (RWAs), enhancing their value proposition.",
      "Through our RWA system, we aim to tokenize real-world assets and securities, creating a seamless and accessible platform for buying, selling, and gaining exposure to these valuable assets.",
      "As part of our tokenization service, users will receive RWA tokens, ERC tokens directly backed and linked to the specific asset they have bought with our stablecoins, representing ownership rights. These tokens will mirror the asset's price on the open market of assets that are backing them 1:1, thanks to Chainlink's Oracle integration. To further enhance the utility of our RWA tokens, we plan to collaborate with industry-leading lending and CDP protocols, allowing them to be utilized as collateral.",
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
