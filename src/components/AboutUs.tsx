import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

// Key strengths with icons for quick scanning
const keyStrengths = [
  {
    icon: <FaPaintBrush className="text-cyan-400" aria-hidden="true" />,
    title: "Pixel-Perfect UI",
    description:
      "Crafting precise, polished interfaces that match designs exactly",
  },
  {
    icon: <FaCode className="text-purple-400" aria-hidden="true" />,
    title: "Scalable Design Systems",
    description: "Building reusable component libraries with Tailwind & MUI",
  },
  {
    icon: <FaMobileAlt className="text-pink-400" aria-hidden="true" />,
    title: "React & React Native",
    description: "Cross-platform expertise for web and mobile apps",
  },
  {
    icon: <FaRocket className="text-orange-400" aria-hidden="true" />,
    title: "Performance & Testing",
    description: "Optimized code with 100% test coverage using Jest",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="section-shell w-full py-10 px-5 rounded-3xl shadow-lg"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6 text-center md:text-left">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">
            About Me
          </p>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold">
            Building Digital Experiences
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            React & React Native engineer with{" "}
            <strong className="text-white">3+ years</strong> of experience
            shipping polished mobile and web products for startups and
            enterprise teams.
          </p>
        </div>

        {/* Key Strengths - 2x2 Grid for Quick Scanning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {keyStrengths.map((strength, index) => (
            <MotionDiv
              key={strength.title}
              className="surface-card rounded-2xl p-5 shadow-lg border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1 flex-shrink-0" aria-hidden="true">
                  {strength.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-1">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-muted">{strength.description}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
