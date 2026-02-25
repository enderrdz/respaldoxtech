import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&auto=format&fit=crop&q=80")',
                    filter: 'brightness(0.3)'
                }}
            />

            {/* Floating Elements Animation (Simulating ingredients like the reference images) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 15, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[15%] w-48 h-48 opacity-70 hidden lg:block z-20 pointer-events-none"
            >
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" alt="spice" className="w-full h-full object-contain filter drop-shadow-2xl" />
            </motion.div>

            <div className="relative z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[#d4af37] tracking-[0.3em] font-medium mb-4 uppercase"
                >
                    Sabor & Sentimiento
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 leading-tight"
                >
                    Cuisine Wave <br /> Restaurant
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a href="#menu" className="btn-primary">VER MENÚ</a>
                    <a href="#contact" className="btn-outline">RESERVAR AHORA</a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 border border-white/20 rounded-full px-2 py-4"
            >
                <div className="w-1 h-3 bg-white/50 rounded-full" />
            </motion.div>
        </section>
    );
};

export default Hero;
