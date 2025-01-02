import { motion } from "framer-motion";
import { data } from "../data/data";
import Container from "../components/Container";
const { whatOurSay } = data;

const WhatOurSay = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="testimonials" className="bg-secondary px-4 md:px-12 py-12 md:py-18">
      <Container>
        <motion.div
          className="px-6 md:px-12 py-16 md:pb-30 md:pt-[100px] rounded-xl bg-gradient-to-b from-[#4F6BBB] via-[#E87D81] to-[#FB5151] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Heading */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              {whatOurSay.heading}
            </h2>
          </motion.div>

          {/* Testimonial Container */}
          <motion.div
            className="bg-white rounded-2xl border border-black p-4 md:p-8 max-w-8xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              {whatOurSay.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center lg:text-left lg:flex-row 
                           space-y-4 lg:space-y-0 lg:space-x-6 p-4 rounded-xl
                           hover:bg-gray-50 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={150}
                    width={150}
                    className="w-32 h-32 md:w-[150px] md:h-[150px] rounded-xl object-cover
                           hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <motion.p
                      className="text-gray-600 mb-4 text-base md:text-lg font-poppins"
                      variants={itemVariants}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    <motion.div variants={itemVariants}>
                      <p className="font-bold  font-poppins text-black">
                        {testimonial.name}
                      </p>
                      <p className="text-sm md:text-md font-bold font-poppins text-black">
                        {testimonial.position}, <br className="lg:hidden" />
                        {testimonial.company}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default WhatOurSay;
