import { Code2, Rocket, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { colors, shadows, transitions } from "../styles/neobrutalism";
import TypedText from "./TypedText";
import Avatar from "../../public/assets/unsplash.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 p-8 relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full"
        style={{ backgroundColor: colors.accent }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60"
        style={{ backgroundColor: colors.secondary }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-8 mb-12 transform -rotate-2"
            style={{
              backgroundColor: colors.primary,
              border: `6px solid ${colors.dark}`,
              boxShadow: shadows.brutal,
              transition: transitions.brutal,
            }}
          >
            <motion.h1
              className="text-7xl font-black mb-4 text-white leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              HELLO I'M <br />
              <span
                style={{
                  color: colors.accent,
                  WebkitTextStroke: `2px ${colors.dark}`,
                }}
              >
                CodeBro
              </span>
            </motion.h1>
            <motion.p
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I am a{" "}
              <TypedText
                strings={["Frontend Developer", "Designer", "Content Creator"]}
              />
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                icon: Code2,
                title: "Developer",
                desc: "Building the future",
                color: colors.secondary,
              },
              {
                icon: Palette,
                title: "Designer",
                desc: "Creating the beautiful",
                color: colors.accent,
              },
              {
                icon: Rocket,
                title: "Creator",
                desc: "Launching ideas",
                color: colors.primary,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 transform hover:rotate-3"
                style={{
                  backgroundColor: "white",
                  border: `4px solid ${colors.dark}`,
                  boxShadow: shadows.brutal,
                  transition: transitions.brutal,
                }}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: shadows.brutalHover,
                }}
              >
                <div
                  className="p-4 mb-4 transform -rotate-3"
                  style={{
                    backgroundColor: item.color,
                    border: `3px solid ${colors.dark}`,
                  }}
                >
                  <item.icon
                    className="w-12 h-12"
                    style={{ color: colors.dark }}
                  />
                </div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: colors.dark }}
                >
                  {item.title}
                </h2>
                <p className="font-medium" style={{ color: colors.dark }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center">
          <motion.div
            className="relative w-full h-[500px] transform rotate-3"
            style={{
              border: `6px solid ${colors.dark}`,
              boxShadow: shadows.brutal,
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={Avatar}
              alt="Avatar"
              className="w-full h-full object-cover "
            />
            <motion.div
              className="absolute -bottom-6 -right-6 p-4 text-xl font-bold"
              style={{
                backgroundColor: colors.accent,
                border: `4px solid ${colors.dark}`,
              }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              That's me!
            </motion.div>
          </motion.div>
          <motion.button
            className="mt-12 px-8 py-4 text-2xl font-bold flex items-center gap-2 transform -rotate-2"
            style={{
              backgroundColor: colors.primary,
              color: "white",
              border: `4px solid ${colors.dark}`,
              boxShadow: shadows.brutal,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: shadows.brutalHover,
            }}
          >
            Let's Connect <ArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
