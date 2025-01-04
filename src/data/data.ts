import { Data } from "./type";

export const data: Data = {
  navbar: {
    logo: "/logo.png",
    menu: [
      { label: "About", link: "#about" },
      { label: "How it works", type: "link", link: "#howitworks" },
      { label: "Testimonials", type: "link", link: "#testimonials" },
    ],
    buttons: [
      { label: "Get Started", type: "primary", link: "#get-started" },
      { label: "Contact Us", type: "secondary", link: "#contact" },
    ],
  },

  heroSection: {
    title: "Trade Smarter. Trade Responsibly. Trade with Daniola.",
    subtitle:
      "Empowering suppliers and buyers in the mineral and commodity trade with AI-powered tools that ensure ethical, efficient, and data-driven transactions..",
    button: "Get Started Today!",
    backgroundImage: "/hero/hero-background.png",
  },

  ourClient: {
    images: [
      {
        name: "American Express",
        image: "/client/american.png",
      },
      {
        name: "Dow",
        image: "/client/dow.png",
      },
      {
        name: "Ericsson",
        image: "/client/ericsson.png",
      },
    ],
  },

  newEra: {
    heading: "A New Era of Trade.",
    description:
      "Revolutionizing the global commodity trade with AI-powered tools, ethical practices, and seamless connections between buyers and suppliers. Join us in shaping a smarter, more transparent future for trading.",
    button: "Explore",
    topImages: ["/newerra/left.png", "/newerra/right.png"],
    bottomImage: "/newerra/bottom.png",  // Fixed: Removed extra bracket
    features: [
      {
        id: 1,
        title: "Ethical Trade Practices",
      },
      {
        id: 2,
        title: "Seamless AI-Powered Transactions",
      },
      {
        id: 3,
        title: "End-to-End Transparency",
      },
    ],
  },

  discover: {
    heading: "Redefining Commodity Trade with AI-Driven Solutions",
    content:
      "Daniola empowers suppliers and buyers with ethical, transparent, and efficient tools to transform the global mineral and commodity trade.",
    button: "Discover How Daniola Works",
  },

  howItWork: {
    steps: [
      {
        id: 1,
        title: "How Daniola Works",
        image: "/howitwork/step1.png",
        description:
          "Daniola streamlines commodity trading by connecting suppliers and buyers with verified listings, transparent transactions, and AI-powered insights to make smarter, faster deals.",
      },
      {
        id: 2,
        title: "For Buyers",
        image: "/howitwork/buyers.png",
        description:
          "Create your profile and specify your trading needs—whether you're buying or selling, Daniola tailors the experience to your goals.",
      },
      {
        id: 3,
        title: "For Suppliers",
        image: "/howitwork/supplier.png",
        description:
          "Browse verified listings or post your own. Daniola ensures ethical practices and transparency at every step.",
      },
    ],
  },

  whatOurSay: {
    heading: "What Our Users Say",
    testimonials: [
      {
        quote:
          "Daniola has transformed how I do business. With transparent pricing tools and verified sustainability claims, I'm closing deals faster than ever.",
        image: "/testimonials/rajesh.png",
        name: "Rajesh Kumar",
        position: "Small-Scale Miner",
        company: "India",
      },
      {
        quote:
          "Finally, a platform that aligns with our ESG goals while streamlining our supply chain. Daniola is indispensable for responsible sourcing.",
        image: "/testimonials/chanwei.png",
        name: "Chen Wei",
        position: "Procurement Manager",
        company: "Tech Company, China",
      },
    ],
  },

  cta: {
    heading: "Join the Future of Ethical Trade Today",
    buttonText: "Start Your Free Trial",
  },

  footerData: {
    cta: {
      heading: "Ready to\nTransform\nYour Trade\nExperience?",
      buttonText: "Get Started Now",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    contact: {
      title: "Contact",
      email: "team@daniolacorp.com",
      phone: "+1 (403) 618 – 1278",
      address: {
        line1: "3582 30 Street,",
        line2: "N. Lethbridge, AB. T1H 6Z4\nCanada",
      },
    },
    company: {
      logo: "/logo.png",
      tagline: "Empowering ethical trade for a sustainable future.",
      copyright: "© 2025 Daniola. All Rights Reserved.",
    },
  },
};

export default data;