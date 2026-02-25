import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
    { id: 1, name: 'Brisa Turbo', price: '$120', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80', color: '#ff5e00' },
    { id: 2, name: 'Caminata Cyber', price: '$150', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80', color: '#00ffcc' },
    { id: 3, name: 'Elevate Pro', price: '$180', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=600&q=80', color: '#c6a672' },
    { id: 4, name: 'Shadow Runner', price: '$140', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80', color: '#555' },
];

const Featured = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} style={{ height: '300vh', position: 'relative' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: '#0a0a0a'
            }}>
                <motion.div style={{ x, display: 'flex', gap: '40px', padding: '0 40px' }}>
                    <div style={{ minWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 style={{ fontSize: '64px', fontWeight: '800', lineHeight: '1.1' }}>
                            PRODUCTOS <br />
                            <span style={{ color: 'var(--accent-1)' }}>DESTACADOS</span>
                        </h2>
                        <p style={{ color: 'var(--text-dim)', marginTop: '20px' }}>
                            Desliza para explorar nuestra selección premium.
                        </p>
                    </div>

                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ y: -10 }}
                            style={{
                                minWidth: '350px',
                                height: '450px',
                                background: 'var(--card-bg)',
                                borderRadius: '24px',
                                padding: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                border: '1px solid var(--glass-border)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-20%',
                                    right: '-10%',
                                    width: '200px',
                                    height: '200px',
                                    background: product.color,
                                    filter: 'blur(100px)',
                                    opacity: 0.2,
                                    zIndex: -1
                                }}
                            />

                            <div>
                                <span style={{ fontSize: '14px', color: 'var(--text-dim)', fontWeight: '600' }}>{product.price}</span>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', marginTop: '4px' }}>{product.name}</h3>
                            </div>

                            <img
                                src={product.img}
                                alt={product.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                                }}
                            />

                            <button className="btn-secondary" style={{ width: '100%', padding: '10px' }}>
                                Ver Detalles
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Featured;
