import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'solar' | 'electric' | 'energy';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export default function Section({ 
  children, 
  className, 
  id,
  background = 'white',
  padding = 'lg',
  animate = true
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    solar: 'bg-gradient-to-br from-solar-50 to-solar-100',
    electric: 'bg-gradient-to-br from-electric-50 to-electric-100',
    energy: 'bg-gradient-to-br from-energy-50 to-energy-100'
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const sectionClasses = cn(
    backgroundClasses[background],
    paddingClasses[padding],
    className
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
}
