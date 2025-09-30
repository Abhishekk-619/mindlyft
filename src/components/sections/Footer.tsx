import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const footerLinks = {
  services: [
    "Training & Workshops",
    "AI-Driven Outreach & Cold Calling",
    "AI-Powered Data Analytics",
    "Automated Business Workflows",
    "AI Content Generation & Optimization",
    "AI Chatbots & Virtual Assistants"
  ],
  company: [
    "Services",
    "About",
    "Contact"
  ],
  resources: [
    "Documentation",
    "Case Studies",
    "White Papers",
    "Blog",
    "Webinars",
    "Support"
  ],
  legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR Compliance",
    "Security",
    "Data Protection"
  ]
};

const socialLinks = [
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "GitHub", icon: "💻", href: "#" },
  { name: "YouTube", icon: "📺", href: "#" }
];

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="relative bg-card/50 border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-heading font-bold mb-4 bg-gradient-to-r from-[#2B85FF] via-[#A68CFF] to-[#00D1D1] bg-clip-text text-transparent">
                  Mindlyft AI
                </h3>
                <p className="text-white/90 font-body leading-relaxed mb-6">
                  Transforming businesses through intelligent AI solutions. 
                  We specialize in cutting-edge automation, analytics, and 
                  neural network implementations that drive real results.
                </p>
              </div>

              {/* Social Links */}
              
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-heading font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-white/90 font-body hover:text-[#2B85FF] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-heading font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <motion.div
                    onClick={() => navigate('/services')}
                    className="text-white/90 font-body hover:text-[#2B85FF] transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Services
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    onClick={() => navigate('/about')}
                    className="text-white/90 font-body hover:text-[#2B85FF] transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    About
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    onClick={() => navigate('/contact')}
                    className="text-white/90 font-body hover:text-[#2B85FF] transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Contact
                  </motion.div>
                </li>
              </ul>
            </motion.div>

            {/* Resources */}
            
          </div>
        </motion.div>

        {/* Newsletter Section */}
        

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-white/90 font-body text-center">
              © 2025 Mindlyft AI. All rights reserved.<span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent"> Designed and Developed by Sarthi Labs.</span> 
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};