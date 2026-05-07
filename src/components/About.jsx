import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'JWT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://www.postman.com/favicon.ico' },
        { name: 'Vercel', icon: 'https://vercel.com/favicon.ico' },
        { name: 'Netlify', icon: 'https://www.netlify.com/favicon.ico' },
        { name: 'Render', icon: 'https://render.com/favicon.ico' },
      ]
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm Aman Kumar, a passionate MERN Stack Developer focused on building scalable, responsive, and user-centric web applications. I enjoy transforming ideas into real-world digital products using modern technologies like React, Node.js, Express.js, and MongoDB.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I have developed multiple full-stack projects including e-commerce platforms, finance applications, and travel systems, with hands-on experience in authentication, REST APIs, database management, and payment gateway integration.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently, I'm expanding my backend and database expertise by learning PostgreSQL and advanced system design concepts while preparing for software engineering opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                    <span className="mr-2">{category.icon}</span>
                    {category.category}
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center p-2 mb-1 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        <span className="text-xs text-center text-gray-600 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;