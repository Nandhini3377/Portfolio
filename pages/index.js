import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact></Contact>
    </div>
  );
}
