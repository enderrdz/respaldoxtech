import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#050505] pt-20 pb-10 px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div>
                    <h3 className="text-xl font-playfair tracking-widest uppercase mb-6">CUISINE WAVE</h3>
                    <p className="text-gray-500 text-sm mb-6">
                        Llevando la alta cocina a su mesa con elegancia y pasión.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#d4af37]/20 transition-colors">
                            <Instagram size={20} className="text-[#d4af37]" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#d4af37]/20 transition-colors">
                            <Facebook size={20} className="text-[#d4af37]" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#d4af37]/20 transition-colors">
                            <Twitter size={20} className="text-[#d4af37]" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Enlaces</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li><a href="#home" className="hover:text-[#d4af37] transition-colors">Inicio</a></li>
                        <li><a href="#menu" className="hover:text-[#d4af37] transition-colors">Menú</a></li>
                        <li><a href="#about" className="hover:text-[#d4af37] transition-colors">Nosotros</a></li>
                        <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Contacto</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Contacto</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li className="flex items-center gap-3">
                            <MapPin size={16} className="text-[#d4af37]" />
                            <span>Calle Gastronómica 123, Ciudad</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={16} className="text-[#d4af37]" />
                            <span>+1 234 567 890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="text-[#d4af37]" />
                            <span>info@cuisinewave.com</span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Horario</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li className="flex justify-between">
                            <span>Lun - Jue:</span>
                            <span>12:00 PM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Vie - Sáb:</span>
                            <span>12:00 PM - 12:00 AM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Dom:</span>
                            <span>11:00 AM - 9:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center">
                <p className="text-gray-600 text-xs">
                    © {new Date().getFullYear()} Cuisine Wave Restaurant. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
