import React from 'react';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 glass-nav px-8 py-4 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <Utensils className="text-[#d4af37]" />
        <span className="text-xl font-semibold tracking-widest uppercase font-playfair">CUISINE WAVE</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <a href="#home" className="hover:text-[#d4af37] transition-colors">INICIO</a>
        <a href="#menu" className="hover:text-[#d4af37] transition-colors">MENÚ</a>
        <a href="#about" className="hover:text-[#d4af37] transition-colors">NOSOTROS</a>
        <a href="#contact" className="hover:text-[#d4af37] transition-colors">CONTACTO</a>
      </div>

      <div>
        <button className="btn-primary text-xs tracking-tighter">RESERVAR MESA</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
