import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Bot, BarChart3, Workflow, PenTool, Users, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";

const services = [{
  title: "Training & Workshops",
  description: "Upskill your teams with hands-on training in AI, data science, and best practices to drive innovation and impact",
  icon: <Users className="w-12 h-12 text-[#2B85FF]" />,
  gradient: "from-[#2B85FF] to-[#00D1D1]"
}, {
  title: "AI-Driven Outreach & Cold Calling",
  description: "Leverage AI-powered personalization to run automated outreach campaigns that convert leads into customers.",
  icon: <Bot className="w-12 h-12 text-[#A68CFF]" />,
  gradient: "from-[#A68CFF] to-[#00D1D1]"
}, {
  title: "AI-Powered Data Analytics",
  description: "Empower your business with advanced machine learning that transforms data into strategic intelligence.",
  icon: <BarChart3 className="w-12 h-12 text-[#2B85FF]" />,
  gradient: "from-[#2B85FF] via-[#A68CFF] to-[#00D1D1]"
}, {
  title: "Automated Business Workflows",
  description: "Boost efficiency by streamlining operations through intelligent automation that eliminates manual tasks.",
  icon: <Workflow className="w-12 h-12 text-[#2B85FF]" />,
  gradient: "from-[#2B85FF] to-[#A68CFF]"
}, {
  title: "AI Content Generation & Optimization",
  description: "Produce high-quality content at scale using AI-driven writing and optimization tools.",
  icon: <PenTool className="w-12 h-12 text-[#A68CFF]" />,
  gradient: "from-[#A68CFF] to-[#00D1D1]"
}, {
  title: "AI Chatbots & Virtual Assistants",
  description: "Intelligent conversational AI solutions that provide 24/7 customer support and engagement..",
  icon: <MessageCircle className="w-12 h-12 text-[#2B85FF]" />,
  gradient: "from-[#2B85FF] via-[#A68CFF] to-[#00D1D1]"
}];

export const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100
      }
    }
  };

  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <motion.h2
           initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-5 text-white text-center">
            Transformative <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 bg-clip-text text-transparent">AI Solutions</span>
            
          </motion.h2>
          <p className="text-xl text-[#A0AEC0] text-center mb-12">
            Comprehensive AI services designed to revolutionize your business processes, 
            enhance decision-making, and drive unprecedented growth in the digital era.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="premium-card rounded-2xl p-8 h-full">
                {/* Icon */}
                <motion.div
                  className="mb-6 relative flex items-center justify-center"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  <div className="relative">
                    {service.icon}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 blur-xl rounded-full`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2B85FF] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#A0AEC0] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 rounded-2xl`}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Bottom Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="premium-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-[#A0AEC0] mb-8 leading-relaxed">
              Join the AI revolution and unlock your organization's full potential with our 
              comprehensive suite of intelligent solutions.
            </p>
            <motion.button
              className="btn-hero px-6 py-2 text-sm text-white inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              onClick={handleConsultationClick}
            >
              Schedule AI Consultation
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};