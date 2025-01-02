import HowItWork from "./sections/HowItWork";
import WhatOurSay from "./sections/WhatOurSay";
import HeroSection from "./sections/HeroSection";
import NewEra from "./sections/NewEra";
import OurClient from "./sections/OurClient";
import Navbar from "./sections/Navbar";
import Discover from "./sections/Discover";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurClient />
      <NewEra />
      <Discover />
      <HowItWork />
      <WhatOurSay />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
