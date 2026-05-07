import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one has been carefully crafted to solve specific problems and showcase different skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                project.theme === 'finance' 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800' 
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading='lazy'
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  {project.theme === 'finance' && (
                    <span className="text-2xl">💰</span>
                  )}
                </div>
                <p className={`mb-4 ${
                  project.theme === 'finance'
                    ? 'text-gray-700 dark:text-gray-200'
                    : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${
                        project.theme === 'finance'
                          ? 'bg-green-200 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-semibold'
                          : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 text-sm rounded-md transition flex items-center space-x-1 ${
                      project.theme === 'finance'
                        ? 'bg-green-200 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-300 dark:hover:bg-green-800'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1 text-sm rounded-md transition flex items-center space-x-1 ${
                        project.theme === 'finance'
                          ? 'bg-green-200 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-300 dark:hover:bg-green-800'
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;