import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
    {
        id: 1,
        title: "Filete de Wagyu",
        price: "$38",
        category: "Platos Fuertes",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80"
    },
    {
        id: 2,
        title: "Pasta de Trufa Negra",
        price: "$26",
        category: "Platos Fuertes",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80"
    },
    {
        id: 3,
        title: "Ceviche de Autor",
        price: "$18",
        category: "Entradas",
        image: "https://images.unsplash.com/photo-1534604973900-c41ab4c5e636?w=800&q=80"
    },
    {
        id: 4,
        title: "Volcán de Chocolate",
        price: "$14",
        category: "Postres",
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&q=80"
    }
];

const MenuSection = () => {
    return (
        <section id="menu" className="section-padding bg-[#0c0c0c]">
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#d4af37] uppercase tracking-widest mb-2"
                >
                    Nuestra Selección
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-playfair"
                >
                    Explora Nuestro Menú
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {menuItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group bg-[#141414] rounded-lg overflow-hidden border border-white/5 transition-all hover:border-[#d4af37]/30"
                    >
                        <div className="h-64 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-xs text-[#d4af37] uppercase tracking-tighter mb-2 block">{item.category}</span>
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-playfair tracking-wide">{item.title}</h3>
                                <span className="text-[#d4af37] font-semibold">{item.price}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="btn-outline">VER MENÚ COMPLETO</button>
            </div>
        </section>
    );
};

export default MenuSection;
