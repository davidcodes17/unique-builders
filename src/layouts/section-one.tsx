"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SectionOne = () => {
  const [activeSection, setActiveSection] = useState("Goals");

  const imageMap: Record<string, string> = {
    Goals: "/assets/goals.jpg",
    Vision: "/assets/vision.jpg",
    Mission: "/assets/mission.jpg",
  };

  const sections = [
    {
      id: "Goals",
      title: "Goals",
      description: "Our goal is to inculcate professionalism and worldwide acceptable standards of uniqueness in meeting the desires of our clients' needs, while upholding the fundamental ethics of ECONOMY, SAFETY, INTEGRITY, AESTHETICS, AND UNIQUENESS to nature."
    },
    {
      id: "Vision",
      title: "Vision",
      description: "To be the fastest growing indigenous and diversified firm in Africa, delivering utmost value to customers and businesses at their earliest convenience."
    },
    {
      id: "Mission",
      title: "Mission",
      description: "To build a strong, virile service delivery niche that surpasses others in impact, thereby remodeling service delivery across the entire continent of Africa."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Animated Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSection}
                  src={imageMap[activeSection]}
                  alt={`${activeSection} Image`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Discover what drives us forward and shapes our commitment to excellence
              </p>
            </motion.div>

            <div className="space-y-6">
              {sections.map((section) => (
                <SubSection
                  key={section.id}
                  title={section.title}
                  description={section.description}
                  isActive={activeSection === section.id}
                  onHover={() => setActiveSection(section.id)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// SubSection with improved animation and styling
interface SubSectionProps {
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
}

const SubSection: React.FC<SubSectionProps> = ({
  title,
  description,
  isActive,
  onHover,
}) => {
  return (
    <motion.div
      className={`group cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-gray-50' : 'hover:bg-gray-50/50'
      } rounded-xl p-6 border-l-4 ${
        isActive ? 'border-blue-600' : 'border-transparent'
      }`}
      onMouseEnter={onHover}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h3 
        className={`text-2xl md:text-3xl font-bold mb-3 transition-colors duration-300 ${
          isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
        }`}
      >
        {title}
      </motion.h3>
      <motion.p 
        className={`text-gray-600 leading-relaxed transition-all duration-300 ${
          isActive ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        {description}
      </motion.p>
      
      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default SectionOne;
