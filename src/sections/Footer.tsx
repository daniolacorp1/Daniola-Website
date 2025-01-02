import { motion } from "framer-motion";
import { data } from "../data/data";
const { footerData } = data;

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-black text-white px-6 sm:px-12 md:px-24 py-12">
      <motion.div
        className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div className="space-y-6" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line">
            {footerData.cta.heading}
          </h2>
          <motion.button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {footerData.cta.buttonText}
          </motion.button>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="space-y-6" variants={fadeInUp}>
          <h3 className="text-xl font-semibold">
            {footerData.quickLinks.title}
          </h3>
          <nav className="flex flex-col space-y-4">
            {footerData.quickLinks.links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1 },
                  },
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Contact Information */}
        <motion.div className="space-y-6" variants={fadeInUp}>
          <h3 className="text-xl font-semibold">{footerData.contact.title}</h3>
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              <p className="text-white font-semibold">Email:</p>
              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-white hover:text-gray-200"
              >
                {footerData.contact.email}
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              <p className="text-white font-semibold">Phone:</p>
              <a
                href={`tel:${footerData.contact.phone}`}
                className="text-white hover:text-gray-200"
              >
                {footerData.contact.phone}
              </a>
            </motion.div>
            <motion.div whileHover={{ x: 10 }}>
              <p className="text-white font-semibold">Address:</p>
              <p className="text-white">
                {footerData.contact.address.line1}
                <br />
                {footerData.contact.address.line2}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Company Info */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={footerData.company.logo}
              height={200}
              width={200}
              alt="Company Logo"
              className="max-w-[150px] md:max-w-[200px]"
            />
          </motion.div>
          <motion.p className="text-gray-400" variants={fadeInUp}>
            {footerData.company.tagline}
          </motion.p>
          <motion.p className="text-sm text-gray-500" variants={fadeInUp}>
            {footerData.company.copyright}
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
