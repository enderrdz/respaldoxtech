import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(12, 12, 12, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '2px' }}>
        SHOE<span style={{ color: 'var(--accent-1)' }}>FLARE</span>
      </div>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {['Colección', 'Hombre', 'Mujer', 'Niños', 'Marcas'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            whileHover={{ color: 'var(--accent-1)' }}
            style={{
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-dim)',
              transition: 'color 0.3s'
            }}
          >
            {item}
          </motion.a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Search size={20} style={{ cursor: 'pointer', color: 'var(--text-dim)' }} />
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={20} style={{ cursor: 'pointer' }} />
          <span style={{
            position: 'absolute',
            top: -8,
            right: -8,
            background: 'var(--accent-1)',
            color: '#000',
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            fontSize: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}>3</span>
        </div>
        <Menu size={20} style={{ cursor: 'pointer', display: 'none' }} className="mobile-menu" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
