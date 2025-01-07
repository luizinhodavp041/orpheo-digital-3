"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  // tags: string[];
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
    // tags: ["Planejamento", "Organização", "Estratégia"],
  },
  {
    title: "Gestão de tráfego",
    description:
      "Otimização e direcionamento eficiente do tráfego digital para maximizar resultados.",
    icon: LineChart,
    bgColor: "from-accent/30 to-accent/10",
    // tags: ["Marketing", "Analytics", "Otimização"],
  },
  {
    title: "Redes sociais",
    description:
      "Gestão completa da sua presença nas redes sociais com estratégias personalizadas.",
    icon: Share2,
    bgColor: "from-accent/25 to-accent/5",
    // tags: ["Social Media", "Conteúdo", "Engajamento"],
  },
  {
    title: "Presença online",
    description:
      "Estratégias para fortalecer sua marca no ambiente digital de forma consistente.",
    icon: Globe,
    bgColor: "from-accent/20 to-accent/5",
    // tags: ["Branding", "SEO", "Digital"],
  },
  {
    title: "Desenvolvimento",
    description:
      "Soluções tecnológicas personalizadas com foco em performance e usabilidade.",
    icon: Code2,
    bgColor: "from-accent/30 to-accent/10",
    // tags: ["Web", "Mobile", "Apps"],
  },
  {
    title: "Design & Branding",
    description:
      "Criação e evolução da identidade visual para fortalecer sua marca.",
    icon: Paintbrush,
    bgColor: "from-accent/25 to-accent/5",
    // tags: ["UI/UX", "Marca", "Visual"],
  },
  {
    title: "Automação",
    description:
      "Otimização e automatização de processos empresariais para maior produtividade.",
    icon: Cog,
    bgColor: "from-accent/20 to-accent/5",
    // tags: ["Processos", "Eficiência", "Software"],
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative w-80 flex-shrink-0">
      <div className="overflow-hidden rounded-lg bg-background-secondary border border-border group-hover:border-accent/20 transition-colors">
        <div className="relative h-64 bg-gradient-to-br flex items-center justify-center overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
          />

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            <Icon
              className="w-24 h-24 text-accent group-hover:text-accent transition-colors duration-300"
              strokeWidth={1.2}
            />
          </motion.div>

          <motion.div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-6 h-6 text-accent" />
          </motion.div>

          <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4 opacity-20">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-accent rounded-full"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-text-secondary">{service.description}</p>
          <div className="flex flex-wrap gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Duplica os serviços o suficiente para garantir uma animação suave
  const duplicatedServices = [
    ...services,
    ...services,
    ...services,
    ...services,
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const distance = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Reseta a posição do scroll quando chega ao final
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll * 0.75) {
        container.scrollLeft = maxScroll * 0.25;
      } else if (container.scrollLeft <= maxScroll * 0.25) {
        container.scrollLeft = maxScroll * 0.75;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/30 to-transparent" />

      <div className="relative z-10 overflow-hidden">
        <div className="text-center space-y-4 mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Soluções completas para transformar sua presença digital e
            impulsionar seu negócio
          </motion.p>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="relative overflow-hidden cursor-grab"
        >
          <div
            className={`flex gap-6 px-3 ${!isDragging && "infinite-scroll"}`}
            style={{
              animationPlayState:
                isHovered || isDragging ? "paused" : "running",
            }}
          >
            {duplicatedServices.map((service, index) => (
              <ServiceCard
                key={`${service.title}-${index}`}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .infinite-scroll {
          animation: scroll 30s linear infinite;
          user-select: none;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
