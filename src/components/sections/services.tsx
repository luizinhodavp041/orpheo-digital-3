"use client";

import React from "react";
import {
  Calendar,
  LineChart,
  Share2,
  Globe,
  Code2,
  Paintbrush,
  Cog,
  ArrowUpRight,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Cronograma estratégico",
    description:
      "Planejamento detalhado e organização temporal dos seus projetos para máxima eficiência.",
    icon: Calendar,
    bgColor: "from-accent/20 to-accent/5",
  },
  {
    title: "Gestão de tráfego",
    description:
      "Otimização e direcionamento eficiente do tráfego digital para maximizar resultados.",
    icon: LineChart,
    bgColor: "from-accent/30 to-accent/10",
  },
  {
    title: "Redes sociais",
    description:
      "Gestão completa da sua presença nas redes sociais com estratégias personalizadas.",
    icon: Share2,
    bgColor: "from-accent/25 to-accent/5",
  },
  {
    title: "Presença online",
    description:
      "Estratégias para fortalecer sua marca no ambiente digital de forma consistente.",
    icon: Globe,
    bgColor: "from-accent/20 to-accent/5",
  },
  {
    title: "Desenvolvimento",
    description:
      "Soluções tecnológicas personalizadas com foco em performance e usabilidade.",
    icon: Code2,
    bgColor: "from-accent/30 to-accent/10",
  },
  {
    title: "Design & Branding",
    description:
      "Criação e evolução da identidade visual para fortalecer sua marca.",
    icon: Paintbrush,
    bgColor: "from-accent/25 to-accent/5",
  },
  {
    title: "Automação",
    description:
      "Otimização e automatização de processos empresariais para maior produtividade.",
    icon: Cog,
    bgColor: "from-accent/20 to-accent/5",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg bg-background-secondary border border-border group-hover:border-accent/20 transition-colors">
        <div className="relative h-64 bg-gradient-to-br flex items-center justify-center overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
          />

          <div className="relative z-10">
            <Icon
              className="w-24 h-24 text-accent group-hover:text-accent transition-colors duration-300"
              strokeWidth={1.2}
            />
          </div>

          <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-6 h-6 text-accent" />
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-text-secondary">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Nossos Serviços
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e
            impulsionar seu negócio
          </p>
        </div>

        <div className="space-y-6">
          {/* Primeira linha - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {firstRow.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          {/* Segunda linha - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondRow.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
