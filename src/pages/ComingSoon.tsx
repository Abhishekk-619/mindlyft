import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingParticles } from "@/components/backgrounds/FloatingParticles";
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

const socialLinks = [
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "GitHub", icon: "💻", href: "#" },
  { name: "YouTube", icon: "📺", href: "#" }
];

export const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription logic
    setIsSubscribed(true);
    setEmail("");
  };

  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Floating Particles Background */}
      <FloatingParticles
        particleCount={60}
        connectionDistance={150}
        particleSpeed={0.3}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Logo */}
        <motion.div
          className="text-4xl font-bold gradient-text mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          mindlyft
        </motion.div>

        {/* Coming Soon Text */}
        <AnimatedText
          variant="gradient"
          className="text-4xl md:text-6xl font-bold mb-8"
          delay={0.3}
        >
          Coming Soon
        </AnimatedText>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Empowering the next generation with cutting-edge AI education. 
          Join us in shaping the future of learning through innovative technology.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Countdown targetDate={launchDate} />
        </motion.div>

        {/* Email Signup */}
        <motion.div
          className="max-w-md mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for updates"
                className="flex-1 px-6 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <motion.button
                type="submit"
                className="btn-hero px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-lg"
            >
              Thanks for subscribing! We'll keep you updated.
            </motion.div>
          )}
        </motion.div>

        {/* Platform Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="premium-card p-6 rounded-xl">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Hands-on Learning</h3>
            <p className="text-muted-foreground">
              Practice with real AI tools and technologies in an interactive environment
            </p>
          </div>
          <div className="premium-card p-6 rounded-xl">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">Industry-Ready Skills</h3>
            <p className="text-muted-foreground">
              Learn the most in-demand AI technologies and frameworks
            </p>
          </div>
          <div className="premium-card p-6 rounded-xl">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Expert Mentorship</h3>
            <p className="text-muted-foreground">
              Get guidance from industry professionals and AI experts
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl hover:bg-primary/20 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};