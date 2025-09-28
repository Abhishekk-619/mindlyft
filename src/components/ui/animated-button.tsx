import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "hero" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = "hero",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 rounded-xl";
  
  const variants = {
    hero: "btn-hero",
    outline: "btn-outline-hero", 
    ghost: "bg-transparent text-foreground hover:bg-primary/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>
      
      {variant === "hero" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-glow to-secondary-glow opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};