"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background com gradiente mais vibrante */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-background to-background" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(0, 220, 130, 0.15) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-semibold">
            Pronto para começar?
          </h2>

          <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
            Transforme suas ideias em realidade. Comece seu projeto hoje e
            descubra um novo nível de excelência digital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button className="bg-accent hover:bg-accent/90 text-background group px-8 py-6 rounded-lg text-base flex items-center gap-2">
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-border text-text hover:bg-background-secondary px-8 py-6 rounded-lg"
            >
              Ver Portfólio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
