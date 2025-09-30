import React from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedText } from "@/components/ui/animated-text";

export const HeroSection: React.FC = () => {
  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
        </motion.div>

        <div className="space-y-4 mb-12">
          <AnimatedText
            variant="gradient"
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold leading-tight md:leading-tight bg-gradient-to-r from-[#2B85FF] via-[#A68CFF] to-[#00D1D1] text-transparent bg-clip-text"
            delay={0.5}
          >
            <div className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Shaping Smarter</div>
            <br className="hidden md:block" />
            <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent"> Businesses with</div>
            <br className="hidden md:block" />
            <div className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">AI Innovation</div>
          </AnimatedText>
        </div>

        <motion.p
          className="text-lg md:text-xl font-body text-white/90 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Transform your business with cutting-edge AI solutions that drive growth, efficiency, and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <AnimatedButton onClick={handleExploreClick}>
            Explore Our Services
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};