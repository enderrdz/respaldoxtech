import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '120px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{
                            color: 'var(--accent-1)',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            fontSize: '14px',
                            display: 'block',
                            marginBottom: '16px'
                        }}
                    >
                        Nueva Colección 2026
                    </motion.span>
                    <h1 style={{
                        fontSize: 'clamp(48px, 8vw, 84px)',
                        fontWeight: '800',
                        lineHeight: '1',
                        marginBottom: '24px',
                        textTransform: 'uppercase'
                    }}>
                        Camina con <br />
                        Estilo <span style={{ color: 'var(--accent-1)' }}>Auténtico</span>
                    </h1>
                    <p style={{
                        color: 'var(--text-dim)',
                        maxWidth: '450px',
                        marginBottom: '40px',
                        fontSize: '18px'
                    }}>
                        Descubre la mezcla perfecta entre artesanía y diseño moderno.
                        Ingeniería para la comodidad, diseño para los audaces.
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <button className="btn-primary">Comprar Ahora</button>
                        <button className="btn-secondary">Explorar Galería</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ position: 'relative' }}
                >
                    {/* Decorative background text */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '200px',
                        fontWeight: '900',
                        color: 'rgba(255, 255, 255, 0.03)',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}>
                        FLARE
                    </div>

                    <motion.img
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                        alt="Hero Shoe"
                        style={{
                            width: '110%',
                            filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
                            transform: 'translateX(-5%)'
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
