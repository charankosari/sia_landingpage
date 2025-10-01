import React from "react";
import { motion } from "framer-motion"; // Import motion

export default function Experience() {
  const text =
    "40 years of experience in providing reliable exam study material at the most affordable prices.";

  // Split the text into words to animate them sequentially
  const words = text.split(" ");

  // Variants for each word/span
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger animation for each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-black text-white font-[Poppins] px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center py-20">
        <motion.p
          className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} // Adjust amount to control when it triggers
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={
                word === "experience" || word === "40" || word === "years"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold"
                  : ""
              }
              style={{ display: "inline-block", marginRight: "0.25em" }} // Keep words together but allow spacing
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}
