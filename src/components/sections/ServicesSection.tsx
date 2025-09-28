import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";

const services = [{
  title: "AI Strategy & Consulting",
  description: "Strategic AI roadmaps and digital transformation consulting to accelerate your business growth with cutting-edge solutions.",
  icon: "🧠",
  gradient: "from-primary to-primary-glow"
}, {
  title: "Intelligent Automation",
  description: "Advanced process automation using machine learning and AI to streamline operations and maximize efficiency.",
  icon: "🤖",
  gradient: "from-secondary to-secondary-glow"
}, {
  title: "Neural Network Solutions",
  description: "Custom neural networks and deep learning models tailored to solve complex business challenges and predictions.",
  icon: "🧬",
  gradient: "from-accent to-accent-glow"
}, {
  title: "AI-Powered Analytics",
  description: "Transform raw data into actionable insights with advanced analytics, predictive modeling, and real-time intelligence.",
  icon: "📊",
  gradient: "from-primary to-secondary"
}, {
  title: "Computer Vision Systems",
  description: "Revolutionary image recognition, object detection, and visual AI systems for next-generation applications.",
  icon: "👁️",
  gradient: "from-secondary to-accent"
}, {
  title: "NLP & Conversational AI",
  description: "Sophisticated natural language processing, chatbots, and conversational interfaces for enhanced user experiences.",
  icon: "💬",
  gradient: "from-accent to-primary"
}];

export const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100
      }
    }
  };

  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 services-title"
          >
            Transformative AI Solutions
          </motion.h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Comprehensive AI services designed to revolutionize your business processes, 
            enhance decision-making, and drive unprecedented growth in the digital era.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="premium-card rounded-2xl p-8 h-full">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6 relative"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  <div className="relative inline-block">
                    {service.icon}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 blur-xl rounded-full`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 rounded-2xl`}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Bottom Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="premium-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the AI revolution and unlock your organization's full potential with our 
              comprehensive suite of intelligent solutions.
            </p>
            <motion.button
              className="btn-hero px-6 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              onClick={handleConsultationClick}
            >
              Schedule AI Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};