import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    title: "10+ Years Experience",
    description: "Pioneering AI solutions with deep expertise in machine learning and digital transformation.",
    icon: "🏆",
    className: "font-heading"
  },
  {
    title: "500+ Projects Delivered",
    description: "Successfully transformed businesses across industries with cutting-edge AI implementations.",
    icon: "🚀",
    className: "font-heading"
  },
  {
    title: "Global Reach",
    description: "Serving clients worldwide with 24/7 support and multilingual capabilities.",
    icon: "🌍",
    className: "font-heading"
  },
  {
    title: "Innovation-First Approach",
    description: "Constantly evolving with the latest AI breakthroughs and emerging technologies.",
    icon: "💡",
    className: "font-heading"
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
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 premium-card rounded-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading mb-5 text-white text-center">
              About <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent">MindLyft AI</span>
            </motion.h2>
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed space-y-6 max-w-4xl mx-auto text-center"
            >
              <p>At MindLyft, we are redefining the way businesses embrace technology.</p>
              <p>With a foundation built on AI, automation, and advanced analytics, we craft solutions that unlock growth and efficiency.</p>
              <p>Our mission is simple: to help organizations scale smarter and work faster while staying future-ready.</p>
              <p>We combine technical excellence with a human-centered approach, ensuring innovation that's both powerful and trustworthy.</p>
              <p>From startups to enterprises, we partner with clients to transform ideas into real-world impact.</p>
              <p>Together, we are shaping the digital future—today.</p>
            </motion.div>
        </div>

        {/* Stats Section */}
        

        {/* Features Grid */}
        

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