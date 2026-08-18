export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export const fadeScaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut', delay: 0.15 } },
};

export const fadeLeftIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.3 } },
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } },
};

export const cardTap = {
  whileTap: { scale: 0.95 },
};

export const btnHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.15 } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const MotionSection = ({ children, className = '', variants = fadeUp, ...props }) => (
  <section
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={variants}
    {...props}
  >
    {children}
  </section>
);