import { motion } from 'framer-motion';
import { fadeLeftIn, fadeUp } from '../lib/motion';

export const Philosophy = () => {
  return (
    <section id="studio" className="relative w-full max-w-[1536px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeLeftIn}
        >
          <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden aspect-square lg:aspect-[4/5]">
            <img
              alt="Architectural Detail"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSHVItYT7KCl9KoJcimDo5nhqo3NsHTHcamrSyiIiPb0cun519bGdrRmt3JwQyvoss2pwU7cUNOXCzJKP5l0oJNWTaNoADXUUWk2tf1YuEwAPCxKxvAI7kJxQoI2nT8_-UcwY7L2dATLEo1woXGWNdscnOpjTkXQ95UdWLphcgstvCV_FwktUuLJICQG7VVOea8_aDs2XgMdZH0MG8yg_Zn6GpIjrCfa_76wIX2vI4UOIFGOvp9nSi0w"
            />
         </div>
       </motion.div>
        <motion.div
          className="flex flex-col gap-8 lg:pl-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-heading)' }}>
            Built on proportion, material honesty, and light.
         </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
            We believe that architecture should transcend the ephemeral nature of trends. Our studio focuses on the fundamental elements of space—how light interacts with raw materials, how proportions create a sense of belonging, and how structure can endure for generations. Every project is a dialogue between the site's history and its future potential.
         </p>
          <div className="w-20 h-px" style={{ backgroundColor: 'var(--color-accent)' }} />
       </motion.div>
     </div>
   </section>
  );
};