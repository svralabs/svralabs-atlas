import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Philosophy } from '../components/Philosophy';
import { Services } from '../components/Services';

export const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />
      <main className="w-full">
        <Hero />
        <FeaturedProjects />
        <Philosophy />
        <Services />
      </main>
    </div>
  );
};