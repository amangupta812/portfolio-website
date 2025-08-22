import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                    Email
                  </h4>
                  <a 
                    href="mailto:amanku0036@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    amanku0036@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Vadodara, Gujarat
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              action="https://formsubmit.co/your@email.com" 
              method="POST"
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg"
            >
              <input 
                type="hidden" 
                name="_subject" 
                value="New contact form submission!" 
              />
              <input 
                type="hidden" 
                name="_autoresponse" 
                value="Thank you for reaching out! I've received your message and will get back to you soon." 
              />
              <input 
                type="hidden" 
                name="_next" 
                value="https://yourwebsite.com/thank-you" 
              />
              
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Send Message
              </h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center space-x-2 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;