import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
      {/* Background Image with reduced opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: "url('/cs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background/90" />
      
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
              className="text-4xl md:text-5xl lg:text-6xl font-heading mb-5 text-white text-center">
              Coming <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent">Soon</span>
          </motion.h2>
          
          {/* Description with blurred background */}
          <motion.div
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl font-body text-white/90 max-w-3xl mx-auto">
              Mindlyft is preparing to launch its innovative <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent">EdTech platform</span>, designed to empower students with cutting-edge knowledge in Artificial Intelligence and emerging technologies. Stay tuned for the future of learning.
            </p>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => navigate('/')}
          className="text-lg font-body px-6 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-cyan-600 text-white shadow-lg shadow-blue-800/20 hover:shadow-blue-800/40 transition-all duration-300"
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