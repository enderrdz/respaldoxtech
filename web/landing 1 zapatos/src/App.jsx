import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const items = [
    { id: 1, name: 'Air Flex 360', price: '$129', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Zenith Prime', price: '$149', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Nova Flow', price: '$119', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Stellar Grip', price: '$159', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Aero Drift', price: '$139', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'Pulse X', price: '$169', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <section className="section container">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '800' }}>MÁS VENDIDOS</h2>
        <p style={{ color: 'var(--text-dim)' }}>Los estilos más populares de la temporada.</p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{
              padding: '24px',
              background: 'var(--glass)',
              borderRadius: '20px',
              border: '1px solid var(--glass-border)',
              transition: 'background 0.3s'
            }}
          >
            <div style={{ position: 'relative', height: '200px', marginBottom: '20px' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '600' }}>{item.name}</h4>
                <div style={{ color: 'var(--accent-1)', fontWeight: '700', marginTop: '4px' }}>{item.price}</div>
              </div>
              <button style={{
                background: 'var(--text-main)',
                color: '#000',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>+</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    padding: '80px 40px 40px',
    background: '#050505',
    borderTop: '1px solid var(--glass-border)'
  }}>
    <div className="container" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px'
    }}>
      <div>
        <div style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>
          SHOE<span style={{ color: 'var(--accent-1)' }}>FLARE</span>
        </div>
        <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>
          Líderes en innovación y diseño de calzado desde 2024.
          Únete a la comunidad de quienes exigen más.
        </p>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>TIENDA</h4>
        <ul style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '2' }}>
          <li>Nuevos Lanzamientos</li>
          <li>Top Ventas</li>
          <li>Descuentos</li>
          <li>Tarjetas de Regalo</li>
        </ul>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>SOPORTE</h4>
        <ul style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '2' }}>
          <li>Estado del Pedido</li>
          <li>Devoluciones</li>
          <li>Política de Envío</li>
          <li>Contáctanos</li>
        </ul>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>BOLETÍN</h4>
        <div style={{ position: 'relative' }}>
          <input
            type="email"
            placeholder="Tu email"
            style={{
              width: '100%',
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              padding: '12px 16px',
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <button style={{
            marginTop: '10px',
            width: '100%',
            background: 'var(--accent-1)',
            border: 'none',
            padding: '10px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Suscribirse</button>
        </div>
      </div>
    </div>
    <div style={{
      marginTop: '60px',
      paddingTop: '20px',
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
      fontSize: '12px',
      color: 'var(--text-dim)'
    }}>
      © 2026 SHOEFLARE. Todos los derechos reservados. Diseño por Antigravity.
    </div>
  </footer>
);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Featured />
      <ProductGrid />
      <Footer />
    </main>
  );
}

export default App;
