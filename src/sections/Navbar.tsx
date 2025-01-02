import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "../data/data";
const { navbar } = data;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsOpen(false); // Close the menu
    const element = document.querySelector(link);
    if (element) {
      // Wait for menu close animation, then scroll
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      y: -20,
      height: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="relative w-full bg-white shadow-sm">
      <div className="mx-auto px-6 md:px-10 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-20"
          >
            <img src={navbar.logo} alt="Logo" className="h-8 md:h-10" />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-30"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-gray-900" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navbar.menu.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  className="text-gray-900 font-medium hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleLinkClick(e, item.link)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center space-x-2 text-small font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {navbar.buttons.map((button) => (
                <motion.button
                  key={button.label}
                  className={`${
                    button.type === "primary"
                      ? "bg-primary text-white"
                      : "bg-[#F5E5E5] text-gray-900"
                  } px-4 py-2 rounded-xl`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed md:hidden inset-0 top-0 bg-white z-20 pt-24"
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex flex-col px-6 py-4 space-y-6">
                  {/* Mobile Menu Items */}
                  <div className="flex flex-col space-y-4">
                    {navbar.menu.map((item) => (
                      <motion.a
                        key={item.label}
                        href={item.link}
                        className="text-gray-900 text-lg font-medium"
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleLinkClick(e, item.link)}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col space-y-2">
                    {navbar.buttons.map((button) => (
                      <motion.button
                        key={button.label}
                        className={`${
                          button.type === "primary"
                            ? "bg-primary text-white"
                            : "bg-[#F5E5E5] text-gray-900"
                        } w-full px-4 py-3 rounded-xl text-center text-lg font-medium`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {button.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
