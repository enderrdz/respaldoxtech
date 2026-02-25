import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-secondary">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted mb-4 block">Nueva Colección 2026</span>
                    <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1]">
                        Sumerge en un <br />
                        <span className="italic">Mundo Infinito</span> <br />
                        de Moda
                    </h1>
                    <p className="text-muted text-lg max-w-md mb-10 leading-relaxed">
                        Descubre piezas atemporales diseñadas para el hombre moderno. Calidad excepcional, diseño minimalista.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all font-medium">
                            Comprar Ahora <ArrowRight size={18} />
                        </button>
                        <button className="border border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all font-medium">
                            Ver Catálogo
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2070&auto=format&fit=crop"
                            alt="Modelo de moda"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl max-w-xs shadow-lg hidden xl:block">
                        <p className="text-sm italic font-serif mb-2">"La simplicidad es la máxima sofisticación."</p>
                        <span className="text-xs font-bold uppercase tracking-widest">— Leonardo da Vinci</span>
                    </div>
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-0"></div>
        </section>
    );
};

export default Hero;
