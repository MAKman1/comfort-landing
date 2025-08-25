import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle, Eye, Brain, Users } from 'lucide-react';

const Problem: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-text-dark mb-12">
            The <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">Challenge</span>
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center font-light">
              For both patients and eyecare specialists, dry eye can be challenging to treat. 
              For many sufferers, drops only provide temporary relief from discomfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text-dark mb-3">Visual Issues</h3>
              <p className="text-sm md:text-base text-text-light font-light">
                Dry eye can cause significant visual disturbances affecting daily life
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text-dark mb-3">Psychological Stress</h3>
              <p className="text-sm md:text-base text-text-light font-light">
                The condition can cause psychological and social stress
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text-dark mb-3">Limited Access</h3>
              <p className="text-sm md:text-base text-text-light font-light">
                Difficulty getting specialist opinions and comprehensive care
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 p-10 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl border border-red-100/50 shadow-xl"
          >
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-base md:text-lg text-text-dark leading-relaxed font-normal">
                Dry eye patients can feel as though they need more input than is available from 
                their high street but may find it increasingly more difficult to get specialist 
                opinions in hospital. This feeling can cause psychological and social stress as 
                well as visual issues.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
