import React from 'react';
import { motion } from 'framer-motion';
import { colors, shadows, transitions } from '../styles/neobrutalism';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <motion.div 
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-block">
        <motion.h2 
          className="text-4xl font-black p-4"
          style={{
            backgroundColor: colors.primary,
            color: 'white',
            border: `3px solid ${colors.dark}`,
            boxShadow: shadows.brutal,
            transition: transitions.brutal,
          }}
          whileHover={{ 
            scale: 1.02,
            rotate: -1,
            boxShadow: shadows.brutalHover
          }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            className="mt-4 text-lg font-bold"
            style={{ color: colors.dark }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}