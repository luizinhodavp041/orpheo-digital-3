"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portal Corporativo",
    description:
      "Design moderno e responsivo para uma plataforma empresarial de última geração.",
    tags: ["Next.js", "React", "TypeScript"],
    imageUrl: "/api/placeholder/600/400",
    link: "#",
  },
  {
    title: "E-commerce Premium",
    description:
      "Interface elegante e minimalista para uma experiência de compra única.",
    tags: ["Tailwind", "Node.js", "PostgreSQL"],
    imageUrl: "/api/placeholder/600/400",
    link: "#",
  },
  {
    title: "App Dashboard",
    description:
      "Painel administrativo com análises em tempo real e visualizações interativas.",
    tags: ["React", "TypeScript", "AWS"],
    imageUrl: "/api/placeholder/600/400",
    link: "#",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-lg bg-background-secondary border border-border group-hover:border-accent/20 transition-colors">
        {/* Imagem com overlay no hover */}
        <div className="relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
              <ArrowUpRight className="w-8 h-8 text-accent" />
            </div>
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
