import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { colors, shadows, transitions } from "../styles/neobrutalism";

const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full z-50 bg-white"
      style={{
        borderBottom: `3px solid ${colors.dark}`,
        transition: transitions.brutal,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-black"
            whileHover={{ scale: 1.05 }}
            style={{ color: colors.primary }}
          >
            CODEBRO
          </motion.h1>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bold relative"
                style={{
                  color: colors.dark,
                  transition: transitions.brutal,
                }}
                whileHover={{
                  scale: 1.1,
                  color: colors.primary,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.toUpperCase()}
              </motion.a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="pt-4 pb-3 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block font-bold"
                  style={{
                    color: colors.dark,
                    transition: transitions.brutal,
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: colors.primary,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
