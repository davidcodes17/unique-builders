"use client";
import { motion } from "framer-motion";

const ClientScroll = () => {
  const clients = [
    "9 mobile",
    "Living Faith Church",
    "Bankers Warehouse Limited",
    "Kingsmen Innovative Group, Lekki",
    "Croxley Nigeria Ltd",
    "Raffoul Nigeria Ltd.",
    "True-Sea Energy Trading Co. Ltd",
    "DEPASA Maritime Ltd.",
    "Niger Delta Devlopement Commission",
  ];

  // Duplicate the text items to simulate seamless infinite scroll
  const scrollingTexts = [...clients, ...clients];

  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-white">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {scrollingTexts.map((text, i) => (
          <div
            key={i}
            className="min-w-max uppercase text-2xl font-bold px-4"
          >
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientScroll;
