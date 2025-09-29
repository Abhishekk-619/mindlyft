import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { VideoBackground } from "@/components/backgrounds/VideoBackground";
import { AnimatedText } from "@/components/ui/animated-text";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="text-center premium-card p-4 rounded-xl"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-3xl md:text-4xl font-bold text-primary mb-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {value.toString().padStart(2, '0')}
          </motion.div>
          <div className="text-sm text-muted-foreground capitalize">{unit}</div>
        </motion.div>
      ))}
    </div>
  );
};

export const ComingSoon: React.FC = () => {
  const navigate = useNavigate();
  const launchDate = new Date('2024-12-31T23:59:59');

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <VideoBackground videoSrc="/Image_to_Cinematic_Video.mp4" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-5 text-white text-center">
              Coming <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent">Soon</span>
            
            </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-[#A0AEC0] max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We're working hard to bring you something amazing. Stay tuned!
          </motion.p>
        </motion.div>

        <Countdown targetDate={launchDate} />

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            {
              title: "AI-Powered Solutions",
              description: "Cutting-edge artificial intelligence and machine learning capabilities."
            },
            {
              title: "Smart Automation",
              description: "Streamline your business processes with intelligent automation."
            },
            {
              title: "Data Analytics",
              description: "Advanced analytics and insights for informed decision-making."
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock expert assistance and technical support."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="premium-card p-6 rounded-xl text-left"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-[#A0AEC0]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Home Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="mt-12 mb-8 px-8 py-3 rounded-xl bg-gradient-to-r from-[#2B85FF] via-[#A68CFF] to-[#00D1D1] text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          Back to Home
        </motion.button>
      </div>
    </div>
  );
};