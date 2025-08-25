import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Smartphone, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Expert Information',
      description: 'Access specialist knowledge and the latest research on dry eye conditions',
      color: 'primary'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Connect with Specialists',
      description: 'Book consultations with certified dry eye specialists directly through the app',
      color: 'secondary'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Convenience',
      description: 'Manage your condition anytime, anywhere from your smartphone',
      color: 'primary'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trusted Treatments',
      description: 'Find and purchase verified dry eye therapy products',
      color: 'secondary'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-text-dark mb-16">
            Why Choose <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Comfort</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${
                  feature.color === 'primary' ? 'bg-gradient-to-br from-primary/10 to-primary/20 text-primary' : 'bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary'
                } rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-text-light leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
