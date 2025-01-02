import { motion } from "framer-motion";
import { data } from "../data/data";
import Container from "../components/Container";
const { howItWork } = data;

const HowItWork = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container id="howitworks" className="py-12 md:pt-24 px-4 md:px-0">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {howItWork.steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`
              ${index === 0 ? "md:px-10" : "space-y-6"}
              ${index !== 0 ? "mt-12 md:mt-0" : ""}
            `}
            variants={itemVariants}
          >
            {/* Render Section Headings */}
            {index === 1 && (
              <motion.h3
                className="text-2xl md:text-large text-[#333333] font-semibold"
                variants={itemVariants}
              >
                {step.title}
              </motion.h3>
            )}
            {index === 2 && (
              <motion.h3
                className="text-2xl md:text-large text-[#333333] font-semibold"
                variants={itemVariants}
              >
                {step.title}
              </motion.h3>
            )}

            {/* Title */}
            {index === 0 && (
              <motion.h2
                className="text-5xl md:text-[80px] font-bold text-[#333333] leading-tight mb-4"
                variants={itemVariants}
              >
                {step.title.split(" ").map((word, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: i * 0.2,
                          duration: 0.6,
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
              </motion.h2>
            )}

            {/* Image */}
            <motion.div
              className="overflow-hidden rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full object-cover max-h-[620px] transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Number and Description */}
            {index >= 0 && (
              <motion.div
                className="flex space-x-4 mt-4"
                variants={itemVariants}
              >
                {/* Number */}
                {index !== 0 && (
                  <div className="text-4xl md:text-6xl font-bold text-gray-400 shrink-0">
                    {String(index).padStart(2, "0")}
                  </div>
                )}
                {/* Description */}
                <p className="text-gray-600 pr-4 md:pr-10 text-lg md:text-xl">
                  {step.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default HowItWork;
