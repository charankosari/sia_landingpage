import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";
import { cn } from "../lib/utils";

// The Meteors component remains the same
const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

export default function PricingSection() {
  const features = [
    "Complete Syllabus Notes",
    "Solved Previous Year Papers (PYQs)",
    "Important Question Bank",
    "Expert-Verified FAQs",
    "Video Lectures for Key Topics",
  ];

  return (
    <div className="relative bg-black font-[Poppins] text-white py-20 px-6 overflow-hidden">
      <Meteors number={30} />

      {/* Main container for the two-column layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --- LEFT COLUMN: Features & Benefits --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            One Price. Unlimited Potential.
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Get complete access to all study materials for any subject. No
            hidden fees, no subscriptions. Just pure, focused learning.
          </p>
          <div className="space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0"
                  size={22}
                />
                <span className="text-gray-200 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: The Pricing Card --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="max-w-sm mx-auto lg:mx-0 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-8 h-full w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900/50 text-blue-400 p-3 rounded-full">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Subject Pass
                  </h3>
                </div>
                <span className="bg-neutral-800 text-xs text-blue-400 font-semibold px-3 py-1 rounded-full border border-neutral-700">
                  One-Time Payment
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Unlock everything you need to ace your exams for one subject.
              </p>
              <div className="mb-6">
                <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  ₹29
                </span>
                <span className="text-xl text-gray-400">/per subject</span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg text-lg transform transition-transform duration-300 hover:scale-105">
                Unlock a Subject
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
