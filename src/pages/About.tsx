import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/sections/Footer";

const About = () => {
  return (
    <div className="relative">
      <Navigation />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;