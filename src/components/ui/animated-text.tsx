import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gradient" | "glow" | "normal";
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className,
  variant = "normal",
  delay = 0
}) => {
  const variants = {
    gradient: "gradient-text",
    glow: "text-primary glow-primary",
    normal: "text-foreground"
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.05
      }
    }
  };

  const child = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("inline-block font-body", variants[variant], className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};