import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Smartphone, Heart, Download, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-light to-background">
        {/* Parallax background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-text-dark mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Comfort</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-medium text-text tracking-normal">Dry Eye App</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-text-light max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
              Your personal companion for managing dry eye symptoms and finding lasting comfort
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('solution');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Discover the Solution
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-primary border-2 border-primary rounded-full font-semibold text-base md:text-lg hover:bg-primary hover:text-white hover:border-primary-dark transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                How It Works
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-primary border-2 border-primary rounded-full font-semibold text-base md:text-lg hover:bg-primary hover:text-white hover:border-primary-dark transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Poster
              </button>
            </motion.div>

            {/* Feature icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center gap-8 md:gap-16"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm text-text-light">Expert Care</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                  <Smartphone className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-sm text-text-light">Mobile App</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm text-text-light">Personalized</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { duration: 2, repeat: Infinity }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Download Poster Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-text-light" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-2">Download Poster</h3>
                <p className="text-text-light">Select your preferred poster size</p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://drive.google.com/file/d/1GNc1I8q4afb7f37exES4fAqwHah11CnJ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  A4 Size
                </a>
                <a
                  href="https://drive.google.com/file/d/13ewxXseb1gOzg_UMUQzMiogDMO4j-Arr/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-primary border-2 border-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-white hover:border-primary-dark transform hover:scale-105 transition-all duration-300 text-center"
                >
                  A6 Size
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
