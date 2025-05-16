'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiPostgresql,
  SiFlutter,
  SiKubernetes,
  SiVuedotjs
} from 'react-icons/si';
import { useEffect, useState } from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/seu-usuario',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-usuario',
    icon: Linkedin,
  },

  {
    name: 'Email',
    url: 'mailto:seu-email@exemplo.com',
    icon: Mail,
  },
];

const techStack = [
  { 
    name: 'Frontend', 
    icon: SiVuedotjs, 
    orbit: 'w-[100px] h-[100px] md:w-[150px] md:h-[150px]',
    size: 'w-8 h-8 md:w-10 md:h-10',
    speed: 20,
  },
  { 
    name: 'Backend', 
    icon: SiNodedotjs, 
    orbit: 'w-[160px] h-[160px] md:w-[220px] md:h-[220px]',
    size: 'w-9 h-9 md:w-11 md:h-11',
    speed: 25,
  },
  { 
    name: 'DevOps', 
    icon: SiDocker, 
    orbit: 'w-[220px] h-[220px] md:w-[290px] md:h-[290px]',
    size: 'w-8 h-8 md:w-10 md:h-10',
    speed: 30,
  },
  { 
    name: 'Database', 
    icon: SiPostgresql, 
    orbit: 'w-[280px] h-[280px] md:w-[360px] md:h-[360px]',
    size: 'w-8 h-8 md:w-10 md:h-10',
    speed: 35,
  },
  { 
    name: 'Mobile', 
    icon: SiFlutter, 
    orbit: 'w-[340px] h-[340px] md:w-[430px] md:h-[430px]',
    size: 'w-9 h-9 md:w-11 md:h-11',
    speed: 40,
  },
  { 
    name: 'Cloud', 
    icon: SiAmazon, 
    orbit: 'w-[400px] h-[400px] md:w-[500px] md:h-[500px]',
    size: 'w-8 h-8 md:w-10 md:h-10',
    speed: 45,
  },
];

export default function Hero() {
  const [particles, setParticles] = useState<Array<{startX: number, startY: number, endX: number, endY: number}>>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [...Array(15)].map(() => ({
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * window.innerHeight,
        endX: Math.random() * window.innerWidth,
        endY: Math.random() * window.innerHeight,
      }));
      setParticles(newParticles);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', generateParticles);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-500/5 dark:from-primary-600/10 dark:to-secondary-500/10" />
        </div>

        {/* Interactive Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-600/20 dark:bg-primary-400/20 rounded-full"
              initial={{ x: particle.startX, y: particle.startY }}
              animate={{
                x: [particle.startX, particle.endX, particle.startX],
                y: [particle.startY, particle.endY, particle.startY],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200 mb-6">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse" />
                Desenvolvedor Full Stack
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 text-transparent bg-clip-text">
                Transformando ideias em
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary-500 to-primary-600 text-transparent bg-clip-text">
                experiências digitais
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Especialista em criar aplicações web modernas e performáticas,
              combinando design intuitivo com código limpo e eficiente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/projetos"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Ver Projetos
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-600"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 font-medium text-gray-700 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Entre em Contato
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center lg:justify-start gap-6 mt-8"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <link.icon size={24} />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[450px] h-[450px] md:w-[600px] md:h-[600px] flex items-center justify-center">
              {/* Sistema Solar */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Sol Central */}
                <motion.div
                  className="absolute z-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 shadow-[0_0_50px_rgba(124,58,237,0.5)]"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 50px rgba(124,58,237,0.5)',
                      '0 0 70px rgba(124,58,237,0.7)',
                      '0 0 50px rgba(124,58,237,0.5)'
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                    Full Stack
                  </div>
                </motion.div>

                {/* Planetas */}
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`absolute ${tech.orbit} border border-primary-500/20 dark:border-primary-400/20 rounded-full`}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: tech.speed,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.div
                      className={`absolute ${tech.size} rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 shadow-lg flex items-center justify-center`}
                      whileHover={{ scale: 1.2 }}
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        transformOrigin: 'center'
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: -360
                        }}
                        transition={{
                          duration: tech.speed,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
      >
        <span className="text-sm mb-2">Role para baixo</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
} 