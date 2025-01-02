interface NavbarMenuItem {
  label: string;
  type?: "link" | "primary" | "secondary";
  link: string;
}

interface Navbar {
  logo: string;
  menu: NavbarMenuItem[];
  buttons: NavbarMenuItem[];
}

interface HeroSection {
  title: string;
  subtitle: string;
  button: string;
  backgroundImage: string;
}

interface OurClient {
  images: {
    name: string;
    image: string;
  }[];
}

interface Feature {
  id: number;
  title: string;
}

interface NewEra {
  heading: string;
  description: string;
  button: string;
  topImages: string[];
  bottomImage: string;
  features: Feature[];
}

interface Discover {
  heading: string;
  content: string;
  button: string;
}

interface HowItWorkStep {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface HowItWork {
  steps: HowItWorkStep[];
}

interface Testimonial {
  quote: string;
  image: string;
  name: string;
  position: string;
  company: string;
}

interface WhatOurSay {
  heading: string;
  testimonials: Testimonial[];
}

interface CTA {
  heading: string;
  buttonText: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterQuickLinks {
  title: string;
  links: FooterLink[];
}

interface FooterContact {
  title: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
  };
}

interface FooterCompany {
  logo: string;
  tagline: string;
  copyright: string;
}

interface FooterData {
  cta: {
    heading: string;
    buttonText: string;
  };
  quickLinks: FooterQuickLinks;
  contact: FooterContact;
  company: FooterCompany;
}

export interface Data {
  navbar: Navbar;
  heroSection: HeroSection;
  ourClient: OurClient;
  newEra: NewEra;
  discover: Discover;
  howItWork: HowItWork;
  whatOurSay: WhatOurSay;
  cta: CTA;
  footerData: FooterData;
}
