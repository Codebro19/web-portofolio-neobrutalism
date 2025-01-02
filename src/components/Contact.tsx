import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { colors, shadows, transitions } from "../styles/neobrutalism";

export function Contact() {
  return (
    <section
      id="contact"
      className="p-8 min-h-screen pt-24"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="p-8"
          style={{
            backgroundColor: "white",
            border: `3px solid ${colors.dark}`,
            boxShadow: shadows.brutal,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="GET_IN_TOUCH"
            subtitle="Let's create something amazing together"
          />

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { label: "NAME", type: "text", placeholder: "codebro" },
              {
                label: "EMAIL",
                type: "email",
                placeholder: "codebro@gmail.com",
              },
            ].map((field) => (
              <motion.div key={field.label} whileHover={{ scale: 1.02 }}>
                <label
                  className="block font-bold mb-2"
                  style={{ color: colors.dark }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full p-3"
                  placeholder={field.placeholder}
                  style={{
                    border: `3px solid ${colors.dark}`,
                    transition: transitions.brutal,
                  }}
                />
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.02 }}>
              <label
                className="block font-bold mb-2"
                style={{ color: colors.dark }}
              >
                MESSAGE
              </label>
              <textarea
                className="w-full p-3 h-32"
                placeholder="Your message here..."
                style={{
                  border: `3px solid ${colors.dark}`,
                  transition: transitions.brutal,
                }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="font-bold px-8 py-3"
              style={{
                backgroundColor: colors.secondary,
                border: `3px solid ${colors.dark}`,
                color: "white",
                boxShadow: shadows.brutal,
                transition: transitions.brutal,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: shadows.brutalHover,
              }}
              whileTap={{ scale: 0.95 }}
            >
              SEND_MESSAGE
            </motion.button>
          </motion.form>

          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Mail, href: "mailto:hello@example.com" },
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3"
                style={{
                  backgroundColor: colors.accent,
                  border: `3px solid ${colors.dark}`,
                  boxShadow: shadows.brutal,
                  transition: transitions.brutal,
                }}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: shadows.brutalHover,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon
                  className="w-6 h-6"
                  style={{ color: colors.dark }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
