import React from 'react';
import { motion } from 'framer-motion';
import { colors, shadows, transitions } from '../../styles/neobrutalism';

interface TechItemProps {
  name: string;
  level: number;
}

function TechItem({ name, level }: TechItemProps) {
  return (
    <motion.div
      className="p-4"
      style={{
        backgroundColor: colors.background,
        border: `3px solid ${colors.dark}`,
        boxShadow: shadows.brutal,
        transition: transitions.brutal,
      }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: shadows.brutalHover
      }}
    >
      <p className="font-bold mb-2" style={{ color: colors.primary }}>{name}</p>
      <div className="h-4" style={{ border: `2px solid ${colors.dark}`, backgroundColor: colors.background }}>
        <motion.div
          className="h-full"
          style={{ backgroundColor: colors.secondary }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function TechStack() {
  const technologies = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "AWS/Cloud", level: 70 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {technologies.map((tech) => (
        <TechItem key={tech.name} {...tech} />
      ))}
    </div>
  );
}