import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target } from 'lucide-react';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-text-dark mb-16">
            About <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Us</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-14 mb-10 border border-white/50"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-text-dark text-center mb-10 leading-relaxed font-light">
                The app was developed by <span className="font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Arthur Okonkwo FRCOphth</span> and{' '}
                <span className="font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Teifi James FRCOphth</span>, 
                two Ophthalmologists (eye doctors) with an interest in dry eye.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                    Arthur Okonkwo FRCOphth
                  </h3>
                  <p className="text-sm md:text-base text-text-light font-light">
                    Consultant Ophthalmologist specializing in dry eye treatment and research
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-3xl hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-secondary mb-3">
                    Teifi James FRCOphth
                  </h3>
                  <p className="text-sm md:text-base text-text-light font-light">
                    Consultant Ophthalmologist with expertise in ocular surface disease
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-10 text-white text-center shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-base md:text-lg leading-relaxed font-light">
                Our mission is to make dry eye information accessible and dry eye more comfortable. 
                We believe everyone deserves access to expert knowledge and effective treatment options 
                for managing their dry eye condition.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
