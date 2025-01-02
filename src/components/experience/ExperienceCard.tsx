import React from 'react';
import { motion } from 'framer-motion';
import { colors, shadows, transitions } from '../../styles/neobrutalism';

interface ExperienceCardProps {
  title: string;
  period: string;
  description: string;
  organization: string;
}

export function ExperienceCard({ title, period, description, organization }: ExperienceCardProps) {
  return (
    <motion.div
      className="bg-white p-6"
      style={{
        border: `3px solid ${colors.dark}`,
        boxShadow: shadows.brutal,
        transition: transitions.brutal,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: shadows.brutalHover
      }}
    >
      <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>{title}</h3>
      <p className="text-lg font-bold mb-2" style={{ color: colors.secondary }}>{organization}</p>
      <p className="text-sm font-bold mb-4" style={{ color: colors.dark }}>{period}</p>
      <p style={{ color: colors.dark }}>{description}</p>
    </motion.div>
  );
}