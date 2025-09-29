import React from "react";
import { motion } from "framer-motion";
import { VideoBackground } from "@/components/backgrounds/VideoBackground";
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
      {/* Video Background */}
      <VideoBackground videoSrc="/Image_to_Cinematic_Video.mp4" />
      
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
            className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight md:leading-tight hero-title bg-gradient-to-r from-[#2B85FF] via-[#A68CFF] to-[#00D1D1] text-transparent bg-clip-text"
            delay={0.5}
          >
            <div className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Shaping Smarter</div>
            <br className="hidden md:block" />
            <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent">Businesses with</div>
            <br className="hidden md:block" />
            <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent">Intelligent AI Innovation</div>
          </AnimatedText>
        </div>

        <motion.p
          className="text-xl md:text-2xl text-[#A0AEC0] max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Revolutionize your business with cutting-edge AI solutions, intelligent automation, 
          and strategic digital innovation designed for the future.
        </motion.p>

        <motion.button
          className="btn-hero px-6 py-2 text-sm text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          onClick={handleExploreClick}
        >
          Explore AI Solutions
        </motion.button>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          {[].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-[#2B85FF] mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-[#A0AEC0]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};