import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  );
}
