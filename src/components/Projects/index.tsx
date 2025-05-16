'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Next.js',
    description: 'Plataforma de e-commerce completa com Next.js, TypeScript e Stripe.',
    longDescription: 'Uma plataforma de e-commerce moderna e escalável, construída com as melhores práticas de desenvolvimento web. Inclui sistema de pagamento, carrinho de compras, autenticação de usuários e painel administrativo.',
    image: '/marcelo/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
    features: [
      'Sistema de pagamento integrado com Stripe',
      'Carrinho de compras em tempo real',
      'Autenticação de usuários',
      'Painel administrativo',
      'Responsivo e otimizado para SEO'
    ],
    challenges: 'O maior desafio foi implementar o sistema de pagamento em tempo real e garantir a segurança das transações.',
    solution: 'Utilizamos WebSockets para atualizações em tempo real e implementamos validações rigorosas de segurança.'
  },
  {
    title: 'Blog com Headless CMS',
    description: 'Blog moderno usando Next.js, GraphQL e Hygraph CMS.',
    longDescription: 'Um blog moderno e performático, utilizando arquitetura headless com Hygraph CMS. Implementa sistema de comentários, categorias e busca avançada.',
    image: '/marcelo/blog.jpg',
    tags: ['Next.js', 'GraphQL', 'Hygraph', 'MDX'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
    features: [
      'Sistema de comentários em tempo real',
      'Categorias e tags',
      'Busca avançada',
      'Editor rico de conteúdo',
      'SEO otimizado'
    ],
    challenges: 'A integração com o CMS e a otimização de performance foram os principais desafios.',
    solution: 'Implementamos cache inteligente e otimizamos as queries GraphQL para melhor performance.'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com gráficos e análise de dados em tempo real.',
    longDescription: 'Dashboard completo para análise de dados em tempo real, com gráficos interativos e relatórios personalizáveis. Inclui exportação de dados e alertas configuráveis.',
    image: '/marcelo/dashboard.jpg',
    tags: ['React', 'D3.js', 'WebSocket', 'Redux'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
    features: [
      'Gráficos interativos com D3.js',
      'Atualizações em tempo real',
      'Relatórios personalizáveis',
      'Exportação de dados',
      'Sistema de alertas'
    ],
    challenges: 'O processamento de grandes volumes de dados em tempo real foi o maior desafio.',
    solution: 'Implementamos WebSockets para atualizações em tempo real e otimizamos o processamento de dados no cliente.'
  },
];

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(project =>
    selectedTags.length === 0 || project.tags.some(tag => selectedTags.includes(tag))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

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

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Código
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal de Detalhes */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-64">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <button
                      className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors"
                      onClick={() => setSelectedProject(null)}
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {selectedProject.longDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Principais Funcionalidades</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Desafios</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Solução</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag) => (
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
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                      >
                        <ExternalLink size={20} />
                        Ver Demo
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github size={20} />
                        Ver Código
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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