import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    year: "2020-2022",
    description: "Specialized in Artificial Intelligence and Machine Learning"
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "Engineering College",
    year: "2016-2020",
    description: "Focus on Full-Stack Development and System Design"
  }
];

export function Education() {
  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start gap-4">
            <div className="bg-yellow-300 p-3 border-2 border-black">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="font-bold text-gray-600">{edu.school}</p>
              <p className="text-sm font-bold text-gray-500 mb-2">{edu.year}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}