import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Contact = () => {
  return (
    <div className="relative">
      <Navigation />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;