"use client";

import React from "react";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const footerLinks = [
  {
    title: "Produto",
    links: [
      { label: "Features", href: "#" },
      { label: "Portfólio", href: "#" },
      { label: "Preços", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Documentação", href: "#" },
      { label: "Contato", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container py-12 md:py-16">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo e Social */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-text">
              Orpheo<span className="text-accent">.</span>
            </h3>
            <p className="text-text-secondary max-w-md">
              Transformando ideias em experiências digitais memoráveis através
              de design e tecnologia.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-text-secondary hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-medium text-text mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-secondary text-sm">
            <p>© 2024 Orpheo. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
