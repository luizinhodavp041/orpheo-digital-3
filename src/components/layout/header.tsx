"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [isAtHero, setIsAtHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight - 100; // um pouco antes do final do Hero

      // Só mostra o header se estiver no Hero
      setIsAtHero(currentScrollY < heroHeight);

      // Determina a opacidade baseada na posição do scroll
      setVisible(currentScrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isAtHero) return null;

  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`px-8 py-4 `}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-2xl font-bold tracking-widest leading-none">
            ORPHEO
          </h1>
          <span className="text-text-secondary text-sm tracking-wider">
            Digital
          </span>
        </motion.div>
      </div>
    </div>
  );
}
