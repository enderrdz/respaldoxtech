import { motion } from 'framer-motion';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                    <div className="hidden lg:flex gap-6 text-sm font-medium uppercase tracking-widest">
                        <a href="#" className="hover:text-muted transition-colors">Novedades</a>
                        <a href="#" className="hover:text-muted transition-colors">Colecciones</a>
                        <a href="#" className="hover:text-muted transition-colors">Hombre</a>
                        <a href="#" className="hover:text-muted transition-colors">Mujer</a>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <h1 className="text-2xl font-serif tracking-tighter uppercase font-bold">Moda Pura</h1>
                </div>

                <div className="flex items-center gap-5">
                    <Search size={20} className="cursor-pointer hover:text-muted transition-colors" />
                    <User size={20} className="cursor-pointer hover:text-muted transition-colors" />
                    <div className="relative cursor-pointer group">
                        <ShoppingBag size={20} className="group-hover:text-muted transition-colors" />
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="fixed inset-0 bg-white z-[60] p-6 lg:hidden"
                >
                    <div className="flex justify-between items-center mb-12">
                        <h1 className="text-2xl font-serif uppercase font-bold">Moda Pura</h1>
                        <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
                    </div>
                    <div className="flex flex-col gap-8 text-2xl font-serif italic">
                        <a href="#">Novedades</a>
                        <a href="#">Colecciones</a>
                        <a href="#">Hombre</a>
                        <a href="#">Mujer</a>
                        <a href="#">Nosotros</a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
