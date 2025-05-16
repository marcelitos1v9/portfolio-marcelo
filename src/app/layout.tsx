import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo Augusto | Desenvolvedor Full Stack",
  description: "Portfólio pessoal com projetos em React, Next.js, Node.js e mais.",
  keywords: ["Next.js", "React", "JavaScript", "TypeScript", "Web Development"],
  authors: [{ name: "Seu Nome" }],
  metadataBase: new URL("https://seusite.com"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seusite.com",
    title: "Seu Nome | Desenvolvedor Full Stack",
    description: "Portfólio pessoal com projetos em React, Next.js, Node.js e mais.",
    siteName: "Seu Nome | Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seu Nome | Desenvolvedor Full Stack",
    description: "Portfólio pessoal com projetos em React, Next.js, Node.js e mais.",
    creator: "@seutwitter",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
