import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ClientScroll from "./client-scroll";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="lg:pt-20 pt-15"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex justify-center">
        <div className="lg:w-[900px] w-full">
          <motion.h1
            variants={fadeUpVariant}
            className="lg:text-[60px] text-[40px] font-semibold lg:text-center"
          >
            Building Excellence with Precision & Innovation
          </motion.h1>
          <motion.p
            variants={fadeUpVariant}
            className="text-[15px] lg:text-center mt-4"
          >
            Delivering world-class construction and integrated services across Nigeria.
          </motion.p>
          <motion.div
            className="flex gap-5 lg:justify-center lg:pt-10 pt-5"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariant}>
              <Button className="py-8 px-8 lg:px-10 rounded-full cursor-pointer text-[#333333] hover:bg-[#fff] hover:text-[#333333] bg-[#ffff]">
                Explore our projects
              </Button>
            </motion.div>
            <motion.div variants={buttonVariant}>
              <Button className="py-8 px-8 lg:px-10 rounded-full cursor-pointer bg-[#333333] font-bold">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute left-0 right-0 bottom-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ClientScroll />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
