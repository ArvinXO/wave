import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  coinBox,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Decentralization",
    url: "#decentralization",
  },
  {
    id: "1",
    title: "Wallet",
    url: "#wallet",
  },
  {
    id: "2",
    title: "airdrops",
    url: "#airdrops",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Create account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const benefits = [
  {
    id: "0",
    title: "Decentralization",
    text: "ORB operates on a peer-to-peer network, bypassing intermediaries for secure transactions.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: coinBox,
  },
  {
    id: "1",
    title: "Enhanced Efficiency",
    text: "ORB streamlines transactions with its efficient peer-to-peer network, ensuring swift and secure exchanges.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: coinBox,
    light: true,
  },
  {
    id: "2",
    title: "Universal Accessibility",
    text: "Access ORB from any device, anywhere, making transactions convenient and accessible across the globe.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: coinBox,
  },
  {
    id: "3",
    title: "Rapid Responsiveness",
    text: "ORB delivers swift responses, providing users with instant access to information without delay.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon4,
    imageUrl: coinBox,
    light: true,
  },
  {
    id: "4",
    title: "Comprehensive Queries",
    text: "ORB offers comprehensive answers to user queries, eliminating the need for multiple searches.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: coinBox,
  },
  {
    id: "5",
    title: "Optimized Performance",
    text: "ORB optimizes performance, utilizing advanced algorithms to provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon2,
    imageUrl: coinBox,
  },
];
export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Secure",
  "2FA Authentication",
  "Metamask Integration",
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Effortless ERC20 Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Intelligent Process Automation",
  },
  {
    id: "2",
    title: "Robust Security Measures",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const airdrops = [
  {
    id: "0",
    title: "Basic",
    description: "Start your journey with Orbital Token and earn rewards!",
    price: "0",
    apy: "Earn ORB rewards equivalent to $0 investment",
    features: [
      "Access to the Orbital Token ecosystem",
      "Opportunity to earn ORB rewards",
      "Explore the app and its features at no cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Upgrade to Premium and maximize your ORB earnings!",
    price: "9.99",
    apy: "Earn ORB rewards equivalent to $9.99 per month",
    features: [
      "Advanced features for enhanced ORB rewards",
      "Priority access to ORB rewards",
      "Exclusive analytics to track ORB earnings",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Unlock exclusive APY rates and scale your ORB rewards!",
    apy: "Contact us for exclusive APY rates",
    price: null,
    features: [
      "Customized solutions for maximum ORB rewards",
      "Dedicated support for your ORB journey",
      "Explore ORB's full potential with tailored features",
    ],
  },
];
export const brainwaveServicesIcons = [disc02, chromecast, sliders04];

export const roadmap = [
  {
    id: "0",
    title: "Tokenomics Enhancement",
    text: "Refine the economic model and tokenomics of Orbital Token to ensure stability, liquidity, and fair distribution among participants.",
    date: "April 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Platform Development",
    text: "Develop and deploy the Orbital Token platform, providing users with a secure and user-friendly interface for managing their tokens and engaging with the ecosystem.",
    date: "April 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Community Engagement",
    text: "Foster community involvement and participation through outreach programs, events, and educational resources to grow the Orbital Token community.",
    date: "April 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with DeFi Protocols",
    text: "Integrate Orbital Token with decentralized finance (DeFi) protocols to enable features such as lending, borrowing, and liquidity provision, expanding utility and accessibility for users.",
    date: "April 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
