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
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold leading-tight md:leading-tight"
            delay={0.5}
          >
            {/* Mobile View */}
            <div className="flex flex-col items-center gap-2 md:hidden">
              <div className="text-white">
                Shaping Smarter
              </div>
              <div className="text-white">
                Business with
              </div>
              <div className="text-white">
                AI Innovation
              </div>
            </div>
            {/* Web View */}
            <div className="hidden md:flex md:flex-col md:items-center md:gap-3">
              <div className="text-white">
                Shaping Smarter Business with
              </div>
              <div className="text-white">
                AI Innovation
              </div>
            </div>
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