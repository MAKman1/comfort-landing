import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-dark mb-12">
            About <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Comfort</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl text-text mb-8 leading-relaxed font-light">
              Comfort – Dry Eye App was developed to educate and support dry eye sufferers 
              and help them take control of their condition.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-background-light p-10 rounded-3xl shadow-2xl border border-white/50"
            >
              <p className="text-base md:text-lg text-text-dark leading-relaxed font-normal">
                It makes specialist information accessible and provides the latest information 
                for free to help demystify the condition. The app also helps you connect with 
                dry eye treatments and a specialist all from your phone!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
