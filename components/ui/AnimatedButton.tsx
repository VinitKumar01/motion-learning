"use client";
import { motion } from "motion/react";

export default function AnimatedButton() {
  return (
    <div className="bg-neutral-900 flex items-center justify-center h-screen w-full [perspective::1000px] [transform-style:preserve-3d]">
      <motion.button
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        whileHover={{
          rotateX: 20,
          rotateY: 20,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
          boxShadow: "0px 20px 50px rgba(8, 122, 184, 0.7)",
        }}
        style={{
          translateZ: 100,
        }}
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Hello
        </span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
}
