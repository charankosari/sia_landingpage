import React from "react";
import HeroMockup from "../assets/mockup-left.png"; // Replace with your mockup image
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { cn } from "../lib/utils";

// The Meteors component remains the same
const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        const position = idx * (1200 / meteorCount) - 400;
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: position + "px",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};

export default function Hero() {
  const features = [
    "PDFs of most important questions",
    "Solved PYQs",
    "FAQs with Expert Answers",
    "Topic Notes",
    "Video lectures for difficult subjects",
  ];

  // State and handlers for 3D tilt effect (no changes needed here)
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const maxRotation = 15; // Max degrees of rotation

    setRotate({
      x: yPct * maxRotation * -1, // Invert y for natural feel
      y: xPct * maxRotation,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <Meteors number={20} />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black to-gray-900 bg-[size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* MODIFIED: Adjusted vertical padding for mobile */}
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <motion.h1
              // MODIFIED: Responsive font sizes
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              The Ultimate Study Partner.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
                The SIA App.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-light text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              Stop searching, start solving. Everything you need for last-minute
              revision, all in one place.
            </motion.p>

            <motion.ul
              className="mt-6 space-y-3 text-slate-300 text-lg inline-block text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            >
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <FiCheck className="text-green-400 text-xl flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
            >
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-8 font-medium text-neutral-50 transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-0.5 animate-spin-slow rounded-full bg-neutral-800 opacity-0 transition-opacity duration-500 group-hover:opacity-75" />
                <span className="relative">Get the App</span>
              </button>
            </motion.div>
          </div>

          {/* Right Mockup */}
          <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              // MODIFIED: Smaller size on mobile, larger on medium screens and up
              className="relative w-72 h-[500px] md:w-[350px] md:h-[600px] rounded-[2rem]"
            >
              <motion.div
                style={{
                  rotateX: rotate.x,
                  rotateY: rotate.y,
                  transition: "all 0.2s ease-out",
                }}
                className="absolute inset-0"
              >
                {/* Enhanced Background Glow */}
                <div className="absolute inset-8 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"></div>

                {/* The Mockup Image */}
                <motion.img
                  src={HeroMockup}
                  alt="SIA App Mockup"
                  className="relative w-full h-full object-contain"
                  style={{
                    transform: "translateZ(25px)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    scale: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.3,
                    },
                    opacity: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.3,
                    },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
