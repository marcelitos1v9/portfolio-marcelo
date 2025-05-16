'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Twitter, Mail, Loader2, CheckCircle2, XCircle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

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
    name: 'Twitter',
    url: 'https://twitter.com/seu-usuario',
    icon: Twitter,
  },
  {
    name: 'Email',
    url: 'mailto:seu-email@exemplo.com',
    icon: Mail,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const formValues = watch();

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const getFieldStatus = (fieldName: keyof ContactFormData) => {
    if (!isDirty) return 'idle';
    if (errors[fieldName]) return 'error';
    if (formValues[fieldName]) return 'success';
    return 'idle';
  };

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Entre em Contato
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Vamos Conversar!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Estou sempre aberto a novas oportunidades, parcerias e projetos
                interessantes. Se você tem uma ideia em mente ou apenas quer trocar uma
                ideia, não hesite em entrar em contato!
              </p>

              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <link.icon size={20} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      focusedField === 'name'
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Nome
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 ${
                        getFieldStatus('name') === 'error'
                          ? 'border-red-500 focus:ring-red-500'
                          : getFieldStatus('name') === 'success'
                          ? 'border-green-500 focus:ring-green-500'
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent`}
                    />
                    <AnimatePresence>
                      {getFieldStatus('name') === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    >
                      <XCircle className="w-4 h-4" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      focusedField === 'email'
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 ${
                        getFieldStatus('email') === 'error'
                          ? 'border-red-500 focus:ring-red-500'
                          : getFieldStatus('email') === 'success'
                          ? 'border-green-500 focus:ring-green-500'
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent`}
                    />
                    <AnimatePresence>
                      {getFieldStatus('email') === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    >
                      <XCircle className="w-4 h-4" />
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      focusedField === 'subject'
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Assunto
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      {...register('subject')}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 ${
                        getFieldStatus('subject') === 'error'
                          ? 'border-red-500 focus:ring-red-500'
                          : getFieldStatus('subject') === 'success'
                          ? 'border-green-500 focus:ring-green-500'
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent`}
                    />
                    <AnimatePresence>
                      {getFieldStatus('subject') === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    >
                      <XCircle className="w-4 h-4" />
                      {errors.subject.message}
                    </motion.p>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      focusedField === 'message'
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Mensagem
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-2 rounded-lg border transition-all duration-300 ${
                        getFieldStatus('message') === 'error'
                          ? 'border-red-500 focus:ring-red-500'
                          : getFieldStatus('message') === 'success'
                          ? 'border-green-500 focus:ring-green-500'
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      } bg-white dark:bg-gray-800 focus:ring-2 focus:border-transparent`}
                    />
                    <AnimatePresence>
                      {getFieldStatus('message') === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    >
                      <XCircle className="w-4 h-4" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                      isSubmitting || !isValid
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </button>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-green-600"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Mensagem enviada com sucesso!
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-red-600"
                      >
                        <XCircle className="w-5 h-5" />
                        Erro ao enviar mensagem. Tente novamente.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 