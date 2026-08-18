import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/motion';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
     </svg>
    ),
    title: 'Residential',
    description: 'Bespoke living environments tailored to individual lifestyles, focusing on intimacy and flow.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
        <path d="M2 22h20" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
     </svg>
    ),
    title: 'Commercial',
    description: 'Dynamic workspaces and retail environments that foster productivity and brand identity.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
     </svg>
    ),
    title: 'Civic',
    description: 'Public institutions and community spaces designed to inspire and serve the collective good.',
  },
];

export const Services = () => {
  return (
    <section id="contact" className="relative w-full max-w-[1536px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-heading)' }}>Our Services</h2>
        <p className="text-sm uppercase tracking-[0.2em]" style={{ color: 'var(--color-accent)' }}>Expertise across scales</p>
     </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={stagger}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="p-8 md:p-10 rounded-[2rem] flex flex-col gap-6"
            style={{ backgroundColor: 'var(--color-card-glass)', backdropFilter: 'blur(10px)', border: '1px solid var(--color-border)' }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.3)' }}>
              <span className="w-5 h-5" style={{ color: 'var(--color-accent)' }}>{service.icon}</span>
           </div>
            <h3 className="text-2xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-heading)' }}>{service.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>{service.description}</p>
         </motion.div>
        ))}
     </motion.div>
   </section>
  );
};