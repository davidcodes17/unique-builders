"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Grid layout configuration with different sizes - using project images
  const gridItems = [
    // Row 1: Large, Medium
    { src: "/projects/IMG-20240515-WA0028.jpg", alt: "Modern Building Construction", size: "large", delay: 0 },
    { src: "/projects/IMG-20241130-WA0002.jpg", alt: "Residential Development", size: "medium", delay: 0.1 },
    
    // Row 2: Medium, Large
    { src: "/projects/IMG-20250404-WA0038.jpg", alt: "Commercial Project", size: "medium", delay: 0.2 },
    { src: "/projects/IMG-20250409-WA0025.jpg", alt: "Large Scale Construction", size: "large", delay: 0.3 },
    
    // Row 3: Medium, Medium
    { src: "/projects/IMG-20250409-WA0027.jpg", alt: "Infrastructure Development", size: "medium", delay: 0.4 },
    { src: "/projects/1.jpg", alt: "Project Showcase", size: "medium", delay: 0.5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section ref={ref} className="py-12 px-2 my-50 md:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our portfolio of innovative projects that showcase our expertise 
            and commitment to excellence in every detail.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[280px]"
        >
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              custom={item.delay}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500",
                getSizeClasses(item.size)
              )}
            >
              <motion.img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.alt}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Click to view details
                  </p>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <button className="bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
