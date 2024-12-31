"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import VideoBackground from "./video-background";

interface MousePosition {
  x: number;
  y: number;
}

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  };

  return (
    <section
      className="min-h-screen w-full bg-background relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background/90 z-10" />{" "}
        {/* Overlay escuro */}
        <VideoBackground />
      </div>

      {/* Gradiente Interativo */}
      <div
        className="absolute inset-0 opacity-20 z-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, #00DC82 0%, transparent 35%)`,
          transition: "all 0.3s ease-out",
        }}
      />

      <div className="container mx-auto h-screen flex items-center relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Design Moderno &
              <span className="text-accent block mt-2">Minimalista</span>
            </h1>

            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-md">
              Transforme suas ideias em experiências digitais únicas com nossa
              abordagem moderna e minimalista.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-background font-medium px-8 py-6 rounded-lg text-base">
                Começar Projeto
              </Button>
              <Button
                variant="outline"
                className="border-border text-text hover:bg-background-secondary px-8 py-6 rounded-lg text-base"
              >
                Ver Projetos
              </Button>
            </div>
          </motion.div>

          {/* Visual/Animação */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative z-20"
          >
            <div className="relative w-full aspect-square">
              {/* Grid de pontos com efeito parallax */}
              {[...Array(36)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/20 rounded-full"
                  style={{
                    left: `${(i % 6) * 20}%`,
                    top: `${Math.floor(i / 6) * 20}%`,
                    transform: `translate(
                      ${(mousePosition.x - 0.5) * 20}px,
                      ${(mousePosition.y - 0.5) * 20}px
                    )`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
