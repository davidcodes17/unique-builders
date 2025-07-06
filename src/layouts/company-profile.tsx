"use client";
import { motion } from "framer-motion";

const paragraph = `Unique Building Concepts and Integrated Services is an indigenous
Public Liability Company offering UNIQUE construction solutions and
related services. The Company’s scope covers all areas of
construction, including the pre and post phases, and in-house design
solution to unique products creation. By dint of hard work, the
company has strategically taken leading positions in the Nigerian
Construction Industry through our methodical and customer- friendly
service delivery approach. We have in the course of time
systematically evolved a culture of excellent service delivery at
customer's earliest convenience and this has by all means helped us to
attract and retain an array of very loyal Clients/Customers in their
multitude. Our design approach aims at ensuring successful, profitable
and bankable projects that are modern 3D visualisation and modelling
technology which aid in improving efficiency and timeliness of project
execution. We build first time quality into construction by giving
parallel attention to details, coupled with strict emphasis in
dimensional accuracy.`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.015,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const CompanyProfile = () => {
  const words = paragraph.split(" ");

  return (
    <div className="lg:my-10 my-5">
      <div>
        <h1 className="lg:text-[50px] text-[30px] font-bold lg:mb-6 mb-4">Corporate Profile</h1>
        <motion.p
          className="lg:text-[20px] leading-[30px] lg:leading-[40px] flex flex-wrap gap-x-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              transition={{ duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

export default CompanyProfile;
