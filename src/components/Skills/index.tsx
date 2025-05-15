'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    name: 'React & Next.js',
    level: 95,
    icon: '⚛️',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: '📘',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Node.js',
    level: 85,
    icon: '🟢',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'TailwindCSS',
    level: 90,
    icon: '🎨',
    color: 'from-teal-500 to-teal-600',
  },
  {
    name: 'MongoDB',
    level: 80,
    icon: '🍃',
    color: 'from-green-600 to-green-700',
  },
  {
    name: 'Docker',
    level: 75,
    icon: '🐳',
    color: 'from-blue-400 to-blue-500',
  },
];

export default function Skills() {
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

          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl">{skill.icon}</span>
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
                'AWS',
                'Vercel',
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
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