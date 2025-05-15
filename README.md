# Portfólio Pessoal

Um portfólio moderno e responsivo construído com Next.js 13+, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Características

- 🎨 Design moderno e responsivo
- 🌓 Tema claro/escuro
- 🎭 Animações suaves com Framer Motion
- 📱 Layout totalmente responsivo
- ⚡ Performance otimizada
- 🔍 SEO otimizado
- 📝 Blog integrado
- 📬 Formulário de contato funcional

## 🚀 Tecnologias

- [Next.js 13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [EmailJS](https://www.emailjs.com/)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📝 Configuração

### EmailJS

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um novo serviço de email
3. Configure as seguintes variáveis de ambiente:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

## 🌐 Deploy

O projeto está configurado para deploy automático na [Vercel](https://vercel.com). Cada push para a branch `main` irá disparar um novo deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/portfolio)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia o [guia de contribuição](CONTRIBUTING.md) primeiro.
