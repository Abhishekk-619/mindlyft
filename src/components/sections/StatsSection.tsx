import React from "react";
import { motion } from "framer-motion";
const stats = [{
  number: "500+",
  label: "AI Projects Delivered",
  description: "Successfully deployed across industries",
  gradient: "from-primary to-primary-glow"
}, {
  number: "98%",
  label: "Client Satisfaction",
  description: "Exceptional results and service quality",
  gradient: "from-secondary to-secondary-glow"
}, {
  number: "50x",
  label: "Performance Boost",
  description: "Average efficiency improvement",
  gradient: "from-accent to-accent-glow"
}, {
  number: "24/7",
  label: "AI Operations",
  description: "Continuous intelligent monitoring",
  gradient: "from-primary to-secondary"
}];
export const StatsSection: React.FC = () => {
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
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    }
  };
  return <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Background Elements */}
      <motion.div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 50, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.4, 0.2, 0.4],
      y: [0, -30, 0]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          

          <motion.h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            Proven Results
          </motion.h2>

          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            Our AI solutions deliver measurable impact across industries, 
            transforming businesses and driving unprecedented growth.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          {stats.map((stat, index) => <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="premium-card rounded-2xl p-8 text-center h-full relative overflow-hidden">
                {/* Background Gradient */}
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Number */}
                <motion.div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`} whileInView={{
              scale: [0.5, 1.1, 1],
              rotate: [0, 5, 0]
            }} transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 200
            }} viewport={{
              once: true
            }}>
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>

                {/* Glow Effect */}
                <motion.div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-0 blur-xl`} whileHover={{
              opacity: 0.3
            }} transition={{
              duration: 0.3
            }} />

                {/* Animated Border */}
                <motion.div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${stat.gradient} rounded-2xl`} style={{
              mask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
              maskComposite: "xor"
            }} initial={{
              opacity: 0,
              rotate: 0
            }} whileInView={{
              opacity: 1,
              rotate: 360
            }} transition={{
              duration: 2,
              delay: index * 0.3,
              ease: "easeInOut"
            }} viewport={{
              once: true
            }} />
              </div>
            </motion.div>)}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} viewport={{
        once: true
      }}>
          <motion.button className="btn-hero text-lg px-10 py-4" whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px hsl(var(--primary) / 0.6)"
        }} whileTap={{
          scale: 0.95
        }}>
            Join the AI Revolution
          </motion.button>
        </motion.div>
      </div>
    </section>;
};