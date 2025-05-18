import React from 'react';
import { Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const socialLinks = [
    { icon: <GitHub size={24} />, url: 'https://github.com/amangupta812', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'www.linkedin.com/in/aman-gupta-034ab62a9', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-10 px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <motion.div 
        className="text-center z-10 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-4">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary-200 dark:bg-primary-700 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg mx-auto"
            />
          </div>
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-300 text-transparent bg-clip-text"
        >
          Aman Kumar
        </motion.h1>
        
        <motion.h2 
          variants={item}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
        >
          Web Developer
        </motion.h2>
        
        <motion.div 
          variants={item}
          className="flex justify-center space-x-6 mb-10"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div variants={item}>
          <button 
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95 dark:bg-primary-700 dark:hover:bg-primary-600"
          >
            Explore My Work
          </button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg 
            className="w-6 h-6 text-gray-500 dark:text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;