"use client";

import { motion } from "framer-motion";
import React from "react";

interface FireworkAnimationProps {
  trigger: number;
}

const Spark = ({ x, y }: { x: number; y: number }) => {
  const angle = Math.random() * Math.PI * 2;
  const distance = 30 + Math.random() * 30;

  return (
    <motion.circle
      r={1.5}
      fill="#00DC82"
      initial={{
        x,
        y,
        opacity: 1,
        scale: 1,
      }}
      animate={{
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    />
  );
};

const SingleFirework = ({ x, y }: { x: number; y: number }) => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <Spark key={i} x={x} y={y} />
      ))}
    </>
  );
};

const FireworkAnimation: React.FC<FireworkAnimationProps> = ({ trigger }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 200">
        <motion.g key={trigger}>
          <SingleFirework x={100} y={100} />
          <SingleFirework x={300} y={80} />
        </motion.g>
      </svg>
    </div>
  );
};

export default FireworkAnimation;
