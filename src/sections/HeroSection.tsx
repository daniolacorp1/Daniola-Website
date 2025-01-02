import { motion } from "framer-motion";
import { data } from "../data/data";

const { heroSection } = data;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] md:h-[800px] w-full mt-4">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={heroSection.backgroundImage}
          alt="Mining background"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 px-4 md:px-0 pt-8 md:pt-16 w-full md:w-[735px] mx-auto md:ml-auto md:mr-12">
        <motion.div
          className="bg-black/25 backdrop-blur-xs rounded-xl px-6 md:px-[52px] py-8 md:py-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-2xl">
            <motion.h1
              className="text-white font-bold"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {[
                "Trade Smarter.",
                "Trade Responsibly.",
                "Trade with",
                "Daniola.",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="text-4xl md:text-6xl mb-3"
                  variants={fadeInUp}
                >
                  {text}
                </motion.div>
              ))}
            </motion.h1>

            <motion.p
              className="text-white text-base md:text-xl text-justify my-4 md:my-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {heroSection.subtitle}
            </motion.p>

            <motion.button
              className="w-full md:w-auto px-8 md:px-12 py-3 md:py-4 bg-primary text-white text-base md:text-lg font-bold rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroSection.button}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
