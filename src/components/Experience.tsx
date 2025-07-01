import React from 'react';
// import { MapPin, Calendar, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Lead development of React-based web applications serving 100k+ users',
        'Architected microservices backend using Node.js and PostgreSQL',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2021 - 2022',
      description: [
        'Developed custom e-commerce solutions for clients',
        'Built responsive websites using React and Vue.js',
        'Integrated third-party APIs and payment systems',
        'Collaborated with design team to implement pixel-perfect designs',
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2021',
      description: [
        'Built user interfaces for a SaaS platform from scratch',
        'Implemented responsive design and cross-browser compatibility',
        'Worked closely with UX team to improve user experience',
        'Maintained 95% code coverage with automated testing',
      ],
      technologies: ['JavaScript', 'React', 'CSS3', 'Jest', 'Figma'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure of working with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className="md:ml-16 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          {/* <Building size={16} className="mr-2" /> */}
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-600">
                        <div className="flex items-center mb-1">
                          {/* <Calendar size={16} className="mr-2" /> */}
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          {/* <MapPin size={16} className="mr-2" /> */}
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;