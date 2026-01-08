import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from "../assets/data"

const FadeInWhenVisible: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20"
      style={{ background: "var(--bg-main)", color: "var(--text-primary)" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: "var(--accent-gradient)" }}></div>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            My professional journey and the companies I've had the pleasure of working with
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: "var(--accent-gradient)" }}></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <FadeInWhenVisible key={index}>
                <div className="relative">
                  <div className="absolute left-6 w-4 h-4 rounded-full border-4 shadow-lg hidden md:block" style={{ background: "var(--accent)", borderColor: "var(--bg-main)" }}></div>

                  <div className="md:ml-16 glass-panel p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <div className="font-semibold" style={{ color: "var(--accent-text)" }}>{exp.company}</div>
                      </div>
                      <div className="text-sm md:text-right mt-4 md:mt-0" style={{ color: "var(--text-muted)" }}>
                        <div className="mb-1">{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start" style={{ color: "var(--text-secondary)" }}>
                          <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: "var(--accent)" }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full font-medium"
                          style={{
                            background: "rgba(6, 182, 212, 0.1)",
                            color: "var(--accent-strong)",
                            border: "1px solid var(--accent)"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
