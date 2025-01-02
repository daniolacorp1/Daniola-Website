import { motion } from "framer-motion";
import { data } from "../data/data";
const { discover } = data;

const Discover = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full bg-secondary py-12 md:py-20">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="space-y-4">
          <motion.h1
            className="text-4xl space-y-2 md:text-6xl font-bold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            <span className="block">Redefining Commodity Trade</span>
            <span className="block">with AI-Driven Solutions</span>
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg md:text-2xl mx-auto leading-tight max-w-[700px]"
            variants={itemVariants}
          >
            {discover.content}
          </motion.p>

          <motion.button
            className="mt-8 px-6 md:px-8 py-3 bg-primary text-white rounded-xl font-medium
                      hover:bg-primary/90 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {discover.button}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Discover;
