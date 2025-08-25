import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardCheck, TrendingUp, BookOpen, Bell, ShoppingBag, Video } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Assess Your Symptoms',
      description: 'The app has a validated dry eye questionnaire to assess and monitor your progress',
      color: 'primary'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Track Your Triggers',
      description: 'Our app helps you track your symptoms and identify what makes your dry eyes worse, so you can avoid triggers',
      color: 'secondary'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Educate Yourself',
      description: 'At the core of the app is the latest summarised information about dry eye so users can become professionals themselves',
      color: 'primary'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Create Your Routine',
      description: 'Set up treatment reminders not only for dry eye therapy but for all eye therapy',
      color: 'secondary'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Find Your Products',
      description: 'Our curated affiliate store lets you easily find and purchase trusted dry eye therapy',
      color: 'primary'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Connect with Experts',
      description: 'Get professional guidance by booking virtual appointments with certified dry eye specialists directly through the app',
      color: 'secondary'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-text-dark mb-6">
            How It <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-light text-center mb-16 max-w-3xl mx-auto font-light">
            Six simple steps to take control of your dry eye condition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="group bg-gradient-to-br from-white to-background-light p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2 border border-gray-100">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${
                    step.color === 'primary' ? 'bg-gradient-to-br from-primary/10 to-primary/20 text-primary' : 'bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary'
                  } rounded-2xl flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-light leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Connection line for desktop */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-base md:text-lg lg:text-xl text-text mb-8 font-light">
              Ready to take control of your dry eye condition?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-5 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
