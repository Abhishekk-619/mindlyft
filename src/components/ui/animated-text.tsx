import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: string;
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
  const letters = children.split("");

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
      className={cn("inline-block", variants[variant], className)}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};