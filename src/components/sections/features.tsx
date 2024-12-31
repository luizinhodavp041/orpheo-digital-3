"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Wand2, Zap } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const features: Feature[] = [
  {
    icon: Wand2,
    title: "Design Intuitivo",
    description:
      "Interface limpa e moderna que proporciona a melhor experiência para seus usuários.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description:
      "Otimizado para máxima velocidade e eficiência em todas as interações.",
  },
  {
    icon: Layers,
    title: "Customização Total",
    description:
      "Flexibilidade para adaptar cada detalhe às suas necessidades específicas.",
  },
];

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-lg bg-background-secondary border border-border hover:border-accent/20 transition-colors"
    >
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-text">{feature.title}</h3>
        <p className="text-text-secondary leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative">
      {/* Gradiente de fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 to-transparent opacity-50" />

      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Recursos Principais
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Ferramentas poderosas combinadas com simplicidade para transformar
            suas ideias em realidade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
