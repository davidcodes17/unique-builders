import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BuildSection = () => {
  return (
    <div className="lg:py-40 pb-20">
      <div className="flex justify-center">
        <motion.div
          className="lg:w-[800px] lg:text-center w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="lg:text-[50px] text-[30px] font-bold text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your Vision, Our Expertise Let’s Build Together.
          </motion.h1>

          <motion.p
            className="py-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We blend modern design, expert craftsmanship, and a client-first
            mindset to build lasting structures — and lasting partnerships
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <Button className="py-7 px-10 rounded-full cursor-pointer text-[#fff] hover:bg-[#000] hover:text-[#fff] bg-[#000]">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuildSection;
