import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'ATUM Information Technologies',
    location: 'Pune',
    period: 'Feb 2025 - Jun 2025',
    description: [
      'Integrated RESTful APIs with pagination, loading states, and image optimization (lazy loading, compression), improving performance by 25%',
      'Built scalable and modular React Native apps for Android and iOS',
      'Collaborated with designers, QA, backend, and product managers to deliver pixel-perfect robust features',
      'Maintained clean code with TypeScript, enforced best practices, peer code reviews, and CI/CD pipelines',
    ],
    technologies: ['React Native', 'TypeScript', 'CI/CD', 'Firebase', 'Jest'],
  },
  {
    title: 'Software Engineer',
    company: 'Extended Web App Tech',
    location: 'Hyderabad',
    period: 'Jul 2022 - Jan 2025',
    description: [
      'Built scalable web and mobile apps using React JS, React Native, and TypeScript',
      'Led team of 5–10 on internal projects while contributing to major client deliveries',
      'Developed reusable UI with HOCs, custom hooks, and state management (Redux Toolkit)',
      'Achieved 100% unit test coverage with Jest & React Testing Library',
      'Published apps on App Store and Play Store with OTA updates and CI/CD pipelines',
    ],
    technologies: ['React', 'React Native', 'Redux Toolkit', 'Jest', 'Firebase'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Blastoserve Scientific',
    location: 'Aurangabad',
    period: 'Feb 2022 - May 2022',
    description: [
      'Developed cross-platform desktop apps using Electron.js',
      'Enhanced responsive web interfaces with HTML, CSS, and JavaScript',
    ],
    technologies: ['Electron.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Teztecch',
    location: 'Nagpur',
    period: 'Sep 2021 - Dec 2021',
    description: [
      'Created dynamic web apps using HTML, CSS, JavaScript, and WordPress',
      'Worked on live Detox web and portfolio apps to update real-time data',
    ],
    technologies: ['JavaScript', 'WordPress', 'HTML', 'CSS'],
  },
];

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
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure of working with
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeInWhenVisible key={index}>
                <div className="relative">
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-lg hidden md:block"></div>

                  <div className="md:ml-16 bg-gray-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <div className="text-blue-400 font-semibold">{exp.company}</div>
                      </div>
                      <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                        <div className="mb-1">{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-900 text-blue-300 text-sm rounded-full font-medium"
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
