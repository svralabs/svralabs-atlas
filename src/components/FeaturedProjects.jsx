import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/motion';

const projects = [
  {
    title: 'The Obsidian Villa',
    category: 'Residential, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTtAYW7RW5ikp-jfaieV9s_Kwn_Ge797NGv_MPIxXl_5umZuitQAkKyJAg7a_9ofFsFf7osccVf1Jd28FrFHGeM3QXN-bD5jnyIpe35k2UyDj4nUUu4KPBgxqlS9jfaEIOJfyHv9e9m0agy9nqNURvPdAlNgDcamIG65Mtxfddz-sAvH2PYFArJ1VTODfWglOytGnOl3sgkl0fLJ47KexYk6cl9Ae9R067e-D1tLoDiiLocmQa5me7Hw',
    offsetClass: '',
  },
  {
    title: 'Ethereal Civic Center',
    category: 'Public Space, 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkQCIcaFCR-W-OdZZeDG8J0VY7MkvUkIsatpmyHOGem_KbVQKr-5P-5hSpgSew-ZDV7l0k11aVF9y2LcauU3zLCgvjUISO72vMRu_p6lA9bNj-6nSeRyGaOz7rHKI5FxsprVmnynBOag10d8z9o7C6N2ap6C3X_FIZktSLf2eV7gI_82jC1VVyaBpz8oYuLCB1d0xetYzzKI_MgtfGSWYktX5OilgvPetkbZ6m0gj3Im-PVpwIeC2ogA',
    offsetClass: 'md:mt-20',
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative w-full max-w-[1536px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex justify-between items-end">
          <motion.h2
            className="text-4xl md:text-6xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-heading)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Featured Projects
          </motion.h2>
          <button className="btn-hover text-sm uppercase tracking-widest pb-2 border-b border-[var(--color-accent)]" style={{ color: 'var(--color-accent)' }}>
            View All
          </button>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group cursor-pointer ${project.offsetClass}`}
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[3rem] mb-6">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h3 className="text-2xl md:text-3xl mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-heading)' }}>{project.title}</h3>
              <p className="text-sm uppercase tracking-wider" style={{ color: 'rgba(237,234,227,0.5)' }}>{project.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};