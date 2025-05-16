'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Next.js',
    description: 'Plataforma de e-commerce completa com Next.js, TypeScript e Stripe.',
    image: '/marcelo/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Blog com Headless CMS',
    description: 'Blog moderno usando Next.js, GraphQL e Hygraph CMS.',
    image: '/marcelo/blog.jpg',
    tags: ['Next.js', 'GraphQL', 'Hygraph', 'MDX'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com gráficos e análise de dados em tempo real.',
    image: '/marcelo/dashboard.jpg',
    tags: ['React', 'D3.js', 'WebSocket', 'Redux'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
              Ver mais projetos no GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 