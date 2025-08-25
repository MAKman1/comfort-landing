import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, CheckCircle } from 'lucide-react';

const Solution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    'Personal companion for managing symptoms',
    'Tools and insights for lasting comfort',
    'Take control of your dry eye condition',
    'Access to specialist knowledge',
    'Connect with treatments and experts'
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-6"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-dark mb-8">
              There is a <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">New Solution</span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-text max-w-3xl mx-auto leading-relaxed font-light">
              Introducing <span className="font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Comfort Dry Eye App</span> — 
              your personal companion for managing symptoms and finding lasting comfort.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-14 max-w-4xl mx-auto border border-white/50"
          >
            <p className="text-base md:text-lg lg:text-xl text-text-dark mb-10 text-center font-medium">
              Our app will give you the tools and insights you need to take control of your comfort.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <span className="text-text-dark text-base md:text-lg font-normal">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 text-center"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Discover How It Works
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
