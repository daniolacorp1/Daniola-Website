import { motion } from "framer-motion";

const Cta = () => {
  return (
    <motion.div
      className="bg-secondary py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the Future of Ethical
          <br className="hidden md:block" /> Trade Today
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="bg-primary text-white font-semibold px-10 py-3 rounded-xl text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cta;
