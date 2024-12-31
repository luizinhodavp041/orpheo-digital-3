"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Laptop, LineChart, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  bgColor: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portal Corporativo",
    description:
      "Design moderno e responsivo para uma plataforma empresarial de última geração.",
    tags: ["Next.js", "React", "TypeScript"],
    icon: Laptop,
    bgColor: "from-accent/20 to-accent/5",
    link: "#",
  },
  {
    title: "E-commerce Premium",
    description:
      "Interface elegante e minimalista para uma experiência de compra única.",
    tags: ["Tailwind", "Node.js", "PostgreSQL"],
    icon: Code2,
    bgColor: "from-accent/30 to-accent/10",
    link: "#",
  },
  {
    title: "App Dashboard",
    description:
      "Painel administrativo com análises em tempo real e visualizações interativas.",
    tags: ["React", "TypeScript", "AWS"],
    icon: LineChart,
    bgColor: "from-accent/25 to-accent/5",
    link: "#",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-lg bg-background-secondary border border-border group-hover:border-accent/20 transition-colors">
        {/* Área do Ícone com gradiente */}
        <div className="relative h-64 bg-gradient-to-br flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
          />

          {/* Ícone principal */}
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

          {/* Ícone hover */}
          <motion.div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-6 h-6 text-accent" />
          </motion.div>

          {/* Padrão de pontos decorativo */}
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

        {/* Conteúdo */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ShowcaseSection() {
  return (
    <section className="py-24 bg-background relative">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/30 to-transparent" />

      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Últimos Projetos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Conheça alguns dos nossos trabalhos mais recentes e como
            transformamos ideias em experiências digitais memoráveis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
