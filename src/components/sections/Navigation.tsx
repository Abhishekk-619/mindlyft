import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('/')}
            style={{ cursor: 'pointer' }}
          >
            Mindlyft AI
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors duration-300 font-medium cursor-pointer ${
                  location.pathname === item.href 
                    ? 'text-[#2B85FF]' 
                    : 'text-[#A0AEC0] hover:text-[#2B85FF]'
                }`}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Coming Soon Button */}
            <motion.button
              className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-[#A68CFF] to-[#00D1D1] text-white shadow-lg shadow-[#A68CFF]/20 hover:shadow-[#A68CFF]/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              onClick={() => navigate('/coming-soon')}
            >
              Coming Soon
            </motion.button>

            {/* CTA Button */}
            <motion.button
              className="btn-hero px-6 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              onClick={() => handleNavClick('/contact')}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#A0AEC0]" />
              ) : (
                <Menu className="h-6 w-6 text-[#A0AEC0]" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border md:hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-6 py-4 space-y-4">
                  {/* Mobile Navigation Links */}
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block transition-colors duration-300 font-medium cursor-pointer ${
                        location.pathname === item.href 
                          ? 'text-[#2B85FF]' 
                          : 'text-[#A0AEC0] hover:text-[#2B85FF]'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  {/* Mobile Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <motion.button
                      className="w-full text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-[#A68CFF] to-[#00D1D1] text-white shadow-lg shadow-[#A68CFF]/20"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        navigate('/coming-soon');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Coming Soon
                    </motion.button>
                    <motion.button
                      className="w-full btn-hero px-6 py-2 text-sm"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleNavClick('/contact');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};