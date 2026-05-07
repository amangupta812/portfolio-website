import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'TechnoHacks Solutions Pvt. Ltd.',
      period: 'Jan 2026 – Apr 2026',
      description: 'Successfully completed a Full Stack Development internship where I worked on developing responsive web applications using modern MERN stack technologies. Gained hands-on experience in frontend development, backend API integration, database management, authentication systems, and real-world project workflows.',
      highlights: [
        'Developed responsive UI components',
        'Worked with React.js and Node.js',
        'Integrated REST APIs',
        'Managed MongoDB database operations',
        'Improved problem-solving and debugging skills'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'GitHub']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and hands-on experience in full-stack development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-primary-300 dark:bg-primary-700"></div>
              )}

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                {/* Header with icon */}
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900">
                      <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4 ml-20">
                  <Calendar size={18} className="mr-2 text-secondary-500" />
                  <span>{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-200 mb-6 ml-20 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6 ml-20">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    Key Highlights:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle size={18} className="text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="ml-20">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
