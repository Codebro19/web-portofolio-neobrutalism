import React from 'react';
import { SectionHeader } from '../SectionHeader';
import { ExperienceCard } from './ExperienceCard';
import { TechStack } from './TechStack';
import { Education } from './Education';
import { colors } from '../../styles/neobrutalism';

const experiences = [
  {
    title: "Senior Software Engineer",
    organization: "Tech Corp",
    period: "2020 - Present",
    description: "Leading development of scalable web applications using React and Node.js"
  },
  {
    title: "Full Stack Developer",
    organization: "Digital Agency",
    period: "2018 - 2020",
    description: "Developed and maintained multiple client projects using modern web technologies"
  }
];

export function Experience() {
  return (
    <section id="experience" className="p-8 min-h-screen pt-24" style={{ backgroundColor: colors.accent }}>
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <SectionHeader 
            title="EXPERIENCE" 
            subtitle="My professional journey"
          />
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader 
            title="EDUCATION" 
            subtitle="Academic background"
          />
          <Education />
        </div>

        <div>
          <SectionHeader 
            title="TECH_STACK" 
            subtitle="Technologies I've mastered"
          />
          <TechStack />
        </div>
      </div>
    </section>
  );
}