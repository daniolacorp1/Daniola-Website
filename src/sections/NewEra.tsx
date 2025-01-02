import { motion } from "framer-motion";
import Container from "../components/Container";
import { data } from "../data/data";
const { newEra } = data;

const NewEra = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="about" className="bg-primary">
      <Container className="overflow-hidden px-4 md:px-6">
        <div className="relative flex flex-col gap-8 mb-8 md:mb-16">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-end gap-8">
            {/* Main Content */}
            <motion.div
              className="w-full md:w-[40%] order-2 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[88px] font-bold mb-4 md:mb-6 text-white leading-tight">
                  {newEra.heading}
                </h1>
                <p className="text-white mb-6 text-sm md:text-base lg:text-lg">
                  {newEra.description}
                </p>
                <motion.button
                  className="bg-white text-black px-6 md:px-8 py-3 rounded-xl font-medium
                          hover:bg-opacity-90 transition-colors duration-300 w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {newEra.button}
                </motion.button>
              </div>
            </motion.div>

            {/* Top Images with Tilt Effect */}
            <motion.div
              className="relative flex md:w-[58%] gap-4 md:gap-6 order-1 md:order-2 h-[300px] sm:h-[500px] md:h-auto"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {newEra.topImages.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute w-full sm:w-[80%] h-[300px] md:h-[473px] rounded-b-full overflow-hidden bg-gray-900
                ${
                  index === 0
                  ? "left-0 -rotate-20 z-10"
                  : "right-0 rotate-20"
                }
                md:relative md:rotate-0 md:w-1/2`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                src={image}
                alt={`Crystal formation ${index + 1}`}
                className="w-full h-full object-cover"
                />
              </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-0 mt-8 md:mt-0">
            {/* Bottom Image */}
            <motion.div
              className="w-full md:w-1/2 h-[300px] md:h-[456px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={newEra.bottomImage}
                alt="Large crystal formation"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Features */}
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <div className="flex flex-col gap-8 md:gap-10">
                <motion.div
                  className="w-16 md:w-1/4 h-2 bg-white"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                />
                {newEra.features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <span className="text-3xl md:text-4xl lg:text-6xl font-bold block">
                      0{feature.id}
                    </span>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium mt-2">
                      {feature.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewEra;
