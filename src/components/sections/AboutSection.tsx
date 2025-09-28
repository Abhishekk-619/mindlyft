import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    title: "10+ Years Experience",
    description: "Pioneering AI solutions with deep expertise in machine learning and digital transformation.",
    icon: "🏆"
  },
  {
    title: "500+ Projects Delivered",
    description: "Successfully transformed businesses across industries with cutting-edge AI implementations.",
    icon: "🚀"
  },
  {
    title: "Global Reach",
    description: "Serving clients worldwide with 24/7 support and multilingual capabilities.",
    icon: "🌍"
  },
  {
    title: "Innovation-First Approach",
    description: "Constantly evolving with the latest AI breakthroughs and emerging technologies.",
    icon: "💡"
  }
];

const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "45%", label: "Avg. Efficiency Increase" },
  { number: "30+", label: "AI Specialists" },
  { number: "24/7", label: "Technical Support" }
];

export const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 about-title"
            >
              About AI Labs
            </motion.h2>
          
            We are a leading AI consultancy dedicated to transforming businesses through intelligent automation, 
            advanced analytics, and cutting-edge neural network solutions. Our mission is to democratize AI 
            technology and make it accessible to organizations of all sizes.
         
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="premium-card rounded-2xl p-6">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="premium-card rounded-2xl p-8 h-full">
                <motion.div
                  className="text-5xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};