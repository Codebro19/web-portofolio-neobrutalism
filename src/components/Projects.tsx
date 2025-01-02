import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { colors, shadows, transitions } from '../styles/neobrutalism';

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary app that changes how we think about design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "TypeScript", "Tailwind"],
    links: {
      demo: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    title: "Beta Platform",
    description: "Enterprise-level solution for modern businesses",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "MongoDB", "AWS"],
    links: {
      demo: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    title: "Gamma Interface",
    description: "Next-generation user interface system",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tags: ["UI/UX", "Figma", "Design Systems"],
    links: {
      demo: "https://example.com",
      github: "https://github.com"
    }
  }
];

export function Projects() {
  return (
    <section id="projects" className="p-8 min-h-screen pt-24" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="SELECTED_WORKS" 
          subtitle="Check out some of my recent projects"
        />
        
        <motion.div 
          className="grid grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group p-6"
              style={{
                backgroundColor: 'white',
                border: `3px solid ${colors.dark}`,
                boxShadow: shadows.brutal,
                transition: transitions.brutal,
              }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: -0.5,
                boxShadow: shadows.brutalHover
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="overflow-hidden"
                  style={{
                    border: `3px solid ${colors.dark}`,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2" style={{ color: colors.primary }}>
                    {project.title}
                  </h3>
                  <p className="mb-4" style={{ color: colors.dark }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <motion.span 
                        key={tag}
                        className="px-3 py-1 text-sm font-bold"
                        style={{
                          backgroundColor: colors.accent,
                          border: `2px solid ${colors.dark}`,
                          color: colors.dark
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.links.demo}
                      className="flex items-center gap-2 px-4 py-2 font-bold"
                      style={{
                        backgroundColor: colors.primary,
                        border: `2px solid ${colors.dark}`,
                        color: 'white',
                        boxShadow: shadows.brutal,
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: shadows.brutalHover
                      }}
                    >
                      <ExternalLink size={16} /> Demo
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      className="flex items-center gap-2 px-4 py-2 font-bold"
                      style={{
                        backgroundColor: colors.dark,
                        border: `2px solid ${colors.dark}`,
                        color: 'white',
                        boxShadow: shadows.brutal,
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: shadows.brutalHover
                      }}
                    >
                      <Github size={16} /> Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}