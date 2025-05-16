'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const timeline = [
  {
    year: '2024',
    title: 'Estagiário em Engenharia de Dados',
    company: 'Compass UOL',
    description: 'Início da jornada profissional em engenharia de dados, aprendendo sobre AWS, Google Cloud e soluções baseadas em nuvem.',
  },
  {
    year: '2025',
    title: 'Trainee em Engenharia de Dados',
    company: 'Compass UOL',
    description: 'Evolução para trainee, com foco em BigQuery e Dataform, trabalhando em projetos de dados e inteligência artificial.',
  },
  {
    year: '2025',
    title: 'Engenheiro de Dados Júnior',
    company: 'Compass UOL',
    description: 'Promoção para engenheiro de dados júnior, com foco em BigQuery e Dataform, entregando soluções eficientes e escaláveis em projetos de dados e IA.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Sobre Mim
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-64 h-64"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse" />
              <Image
                src="/marcelo/marcelo_futurista.png"
                alt="Seu Nome"
                width={256}
                height={256}
                className="rounded-full object-cover relative z-10 p-1"
              />
            </motion.div>

            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              >
                Sou engenheiro de dados na Compass UOL, certificado pela AWS e com experiência em soluções baseadas em nuvem. Atualmente trabalho com Google Cloud Platform, com foco em BigQuery e Dataform. Tenho atuado em projetos de dados e inteligência artificial, sempre buscando entregar soluções eficientes e escaláveis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {['AWS', 'Google Cloud', 'BigQuery', 'Dataform', 'Next.js', 'MongoDB','MYSQL','TailwindCSS', 'React', 'Node.js', 'TypeScript'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    >
                      {skill}
                    </span>
                  )
                )}
              </motion.div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Minha Jornada
            </h3>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="md:w-32 font-bold text-purple-600 dark:text-purple-400">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      {item.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 