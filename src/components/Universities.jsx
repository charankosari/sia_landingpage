import React from "react";
import { motion } from "framer-motion"; // Import motion
import { University, Users, Library } from "lucide-react";

const universities = [
  "Osmania University",
  "Kakatiya University",
  "Mahatma Gandhi University",
  "Madras University",
  "Palamuru University",
];

const courses = ["BCOM", "BBA", "BSC", "BCA", "BTECH", "MCA", "MBA"];

export default function StudyMaterialSection() {
  // Animation variants for the fade-up effect
  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: 50, // Start 50px below the final position
    },
    animate: (index) => ({
      // The 'index' allows for staggered delays
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index, // Stagger delay based on index
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    // Add overflow-hidden to the parent to prevent scrollbars during animation
    <div className="bg-black text-white font-[Poppins] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: University Coverage - Animated */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }} // Animate once when 30% is visible
          variants={fadeInVariants}
          custom={0} // No delay for the first element
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tailored for Your University
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Study material meticulously designed as per your university's
            syllabus, exam patterns, and previous year papers.
          </p>
        </motion.div>

        {/* University Cards Grid - Animated */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {universities.map((uni, index) => (
            <motion.div
              key={uni}
              className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-neutral-800 cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              custom={index} // Pass index to stagger the animation
            >
              <University className="text-blue-500 mb-4" size={32} />
              <h3 className="font-semibold text-gray-200">{uni}</h3>
            </motion.div>
          ))}
        </div>

        {/* Section 2: Student Types & Courses - Animated */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: For Toppers & Last Minute Champions - Animated */}
          <motion.div
            className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 p-8 rounded-2xl flex flex-col items-start justify-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            custom={0} // Reset delay index for this section
          >
            <div className="bg-blue-900/50 text-blue-400 p-3 rounded-full mb-4">
              <Users size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-100 mb-2">
              For Toppers & Last Minute Champions
            </h3>
            <p className="text-gray-400">
              Whether you're aiming for the top rank or mastering concepts
              overnight, our resources are designed to help you succeed.
            </p>
          </motion.div>

          {/* Card 2: Courses Offered - Animated */}
          <motion.div
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            custom={1} // Delay this card slightly after the first one
          >
            <div className="flex items-center gap-4 mb-5">
              <Library className="text-blue-500" size={32} />
              <h3 className="text-2xl font-bold text-gray-100">
                Degrees We Cover
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {courses.map((course) => (
                <span
                  key={course}
                  className="bg-neutral-800 text-gray-300 font-medium px-4 py-2 rounded-full text-sm border border-neutral-700 hover:bg-neutral-700 transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
