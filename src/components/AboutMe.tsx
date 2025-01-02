"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Coffee, Music, Book } from "lucide-react";
import { colors, shadows, transitions } from "../styles/neobrutalism";

const skillsData = [
  { icon: Code, label: "Coding", color: colors.primary },
  { icon: Palette, label: "Design", color: colors.secondary },
  { icon: Rocket, label: "Innovation", color: colors.accent },
];

const interestsData = [
  { icon: Coffee, label: "Coffee", color: colors.primary },
  { icon: Music, label: "Music", color: colors.secondary },
  { icon: Book, label: "Reading", color: colors.accent },
];

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-black mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: colors.dark }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="p-6 transform -rotate-2"
              style={{
                backgroundColor: colors.primary,
                border: `4px solid ${colors.dark}`,
                boxShadow: shadows.brutal,
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: colors.dark }}
              >
                Who Am I?
              </h3>
              <p className="text-lg" style={{ color: colors.dark }}>
                I'm Codebro, a passionate frontend developer with a knack for
                creating beautiful and functional web experiences. With a
                background in both design and coding, I bring a unique
                perspective to every project I tackle.
              </p>
            </div>

            <div
              className="p-6 transform rotate-1"
              style={{
                backgroundColor: colors.secondary,
                border: `4px solid ${colors.dark}`,
                boxShadow: shadows.brutal,
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: colors.dark }}
              >
                My Journey
              </h3>
              <p className="text-lg" style={{ color: colors.dark }}>
                My journey in tech started with a curiosity for how things work
                on the web. This curiosity led me to dive deep into the world of
                frontend development, where I've honed my skills in HTML, CSS,
                JavaScript, and various modern frameworks.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className="p-6 transform rotate-1"
              style={{
                backgroundColor: colors.accent,
                border: `4px solid ${colors.dark}`,
                boxShadow: shadows.brutal,
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: colors.dark }}
              >
                Skills
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="flex flex-col items-center p-2"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <skill.icon size={40} color={colors.dark} />
                    <span
                      className="mt-2 font-bold"
                      style={{ color: colors.dark }}
                    >
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              className="p-6 transform -rotate-1"
              style={{
                backgroundColor: "white",
                border: `4px solid ${colors.dark}`,
                boxShadow: shadows.brutal,
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: colors.dark }}
              >
                Interests
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {interestsData.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    className="flex flex-col items-center p-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <interest.icon size={40} color={colors.dark} />
                    <span
                      className="mt-2 font-bold"
                      style={{ color: colors.dark }}
                    >
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 p-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            backgroundColor: colors.primary,
            border: `4px solid ${colors.dark}`,
            boxShadow: shadows.brutal,
          }}
        >
          <h3
            className="text-3xl font-bold mb-4"
            style={{ color: colors.dark }}
          >
            Let's Create Something Amazing!
          </h3>
          <p className="text-lg mb-6" style={{ color: colors.dark }}>
            I'm always excited to take on new challenges and collaborate on
            innovative projects. If you're looking for a frontend developer who
            can bring your ideas to life, let's connect!
          </p>
          <motion.a
            href="#contact"
            className="px-8 py-3 text-xl font-bold"
            style={{
              backgroundColor: colors.accent,
              color: colors.dark,
              border: `3px solid ${colors.dark}`,
              boxShadow: shadows.brutal,
            }}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              boxShadow: shadows.brutalHover,
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
