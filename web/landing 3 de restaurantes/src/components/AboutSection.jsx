import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <img
                    src="https://images.unsplash.com/photo-1550966842-28c213612803?w=800&q=80"
                    alt="Ambience"
                    className="rounded-lg shadow-2xl relative z-10 w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl z-0" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[#d4af37] tracking-widest uppercase mb-4">Desde 1995</p>
                <h2 className="text-4xl md:text-5xl font-playfair mb-8">Una Experiencia Culinaria Única</h2>
                <p className="text-gray-400 mb-6 text-lg">
                    En Cuisine Wave, combinamos técnicas tradicionales con un enfoque moderno. Cada plato es una obra de arte diseñada para deleitar sus sentidos.
                </p>
                <p className="text-gray-400 mb-8">
                    Utilizamos solo los ingredientes locales más frescos, seleccionados cuidadosamente por nuestro chef ejecutivo para garantizar la más alta calidad en cada bocado.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div>
                        <h4 className="text-2xl font-playfair text-[#d4af37]">100%</h4>
                        <p className="text-xs uppercase tracking-tighter text-gray-500">Orgánico</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-playfair text-[#d4af37]">25+</h4>
                        <p className="text-xs uppercase tracking-tighter text-gray-500">Años de Experiencia</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
