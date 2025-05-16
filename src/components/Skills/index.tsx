'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGooglecloud,
  SiJquery,
  SiMysql
} from 'react-icons/si';
import { useState } from 'react';

const skillCategories = {
  frontend: {
    name: 'Frontend',
    skills: [
      {
        name: 'React & Next.js',
        level: 95,
        icon: SiReact,
        color: 'from-primary-500 to-primary-600',
        description: 'Desenvolvimento de interfaces modernas e responsivas com React e Next.js',
      },
      {
        name: 'TypeScript',
        level: 90,
        icon: SiTypescript,
        color: 'from-primary-600 to-primary-700',
        description: 'Desenvolvimento com tipagem estática e recursos avançados do TypeScript',
      },
    ],
  },
  backend: {
    name: 'Backend',
    skills: [
      {
        name: 'Node.js',
        level: 85,
        icon: SiNodedotjs,
        color: 'from-secondary-500 to-secondary-600',
        description: 'Desenvolvimento de APIs RESTful e aplicações server-side com Node.js',
      },
      {
        name: 'MySQL',
        level: 85,
        icon: SiMysql,
        color: 'from-primary-500 to-primary-600',
        description: 'Modelagem e otimização de bancos de dados relacionais com MySQL',
      },
    ],
  },
  cloud: {
    name: 'Cloud & DevOps',
    skills: [
      {
        name: 'Google Cloud',
        level: 80,
        icon: SiGooglecloud,
        color: 'from-secondary-500 to-secondary-600',
        description: 'Gerenciamento de infraestrutura e serviços na nuvem com Google Cloud',
      },
      {
        name: 'MongoDB',
        level: 80,
        icon: SiMongodb,
        color: 'from-secondary-600 to-secondary-700',
        description: 'Trabalho com bancos de dados NoSQL e MongoDB',
      },
      {
        name: 'BigQuery',
        level: 75,
        icon: SiJquery,
        color: 'from-primary-400 to-primary-500',
        description: 'Análise de dados e consultas em larga escala com BigQuery',
      },
    ],
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Habilidades & Ferramentas
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid gap-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl">
                    <skill.icon className="w-8 h-8" />
                  </span>
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg -top-2 left-full ml-4 w-64"
                  >
                    {skill.description}
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-900 transform rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Outras Ferramentas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git',
                'GitHub',
                'VS Code',
                'Figma',
                'Jest',
                'Cypress',
                'Vercel',
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 