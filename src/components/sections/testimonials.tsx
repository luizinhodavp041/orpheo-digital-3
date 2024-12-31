"use client";

import React, { useState, useEffect } from "react";
import FireworkAnimation from "./firework-animation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content:
      "A experiência de trabalhar com a equipe foi excepcional. O resultado final superou todas as expectativas e impactou diretamente nossos resultados.",
    author: "Maria Silva",
    role: "CEO, TechCorp",
    image: "/api/placeholder/100/100",
  },
  {
    id: 2,
    content:
      "Design moderno e desenvolvimento impecável. A equipe entendeu perfeitamente nossas necessidades e entregou um produto incrível.",
    author: "João Santos",
    role: "Diretor de Produto, InovaTech",
    image: "/api/placeholder/100/100",
  },
  {
    id: 3,
    content:
      "Profissionalismo e criatividade em cada etapa do projeto. A comunicação foi clara e o prazo foi respeitado à risca.",
    author: "Ana Costa",
    role: "Marketing Lead, StartupXYZ",
    image: "/api/placeholder/100/100",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) =>
      prevIndex + newDirection < 0
        ? testimonials.length - 1
        : prevIndex + newDirection >= testimonials.length
        ? 0
        : prevIndex + newDirection
    );
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <FireworkAnimation trigger={currentIndex} />
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/20 to-background" />
      </div>

      <div className="container relative z-10">
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            O que dizem nossos clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Histórias reais de clientes que transformaram suas ideias em
            realidade
          </motion.p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-background-secondary p-8 rounded-lg border border-border">
                  <Quote className="w-12 h-12 text-accent/20 mb-6" />
                  <p className="text-lg md:text-xl text-text mb-8 leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-medium text-text">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botões de navegação */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={() => paginate(-1)}
              variant="outline"
              className="p-2 rounded-full border-border hover:bg-background-secondary"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => paginate(1)}
              variant="outline"
              className="p-2 rounded-full border-border hover:bg-background-secondary"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
