import React from "react";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    "AI Strategy & Consulting",
    "Intelligent Automation",
    "Neural Network Solutions",
    "AI-Powered Analytics",
    "Computer Vision Systems",
    "NLP & Conversational AI"
  ],
  company: [
    "About Us",
    "Our Team",
    "Careers",
    "Press Kit",
    "Partners",
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
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  mindlyft
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Transforming businesses through intelligent AI solutions. 
                  We specialize in cutting-edge automation, analytics, and 
                  neural network implementations that drive real results.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
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
              <h4 className="text-lg font-bold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold text-foreground mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground">
              © 2024 AI Labs. All rights reserved. Powered by innovation.
            </div>
            
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};