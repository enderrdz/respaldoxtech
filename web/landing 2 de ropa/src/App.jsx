import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';

const PromoSection = () => (
  <section className="py-20 bg-secondary overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Fashion promo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-center p-2 transform rotate-12">
          <span className="text-xs font-bold uppercase">Edición Limitada</span>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Elevamos tu Armario con Estilo Único</h2>
        <p className="text-muted mb-8 text-lg">Nuestra nueva línea de sastrería combina la tradición artesanal con cortes modernos para asegurar que siempre destaques.</p>
        <button className="bg-primary text-white px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all">
          Saber Más
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-secondary py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="space-y-6">
        <h1 className="text-2xl font-serif font-bold uppercase">Moda Pura</h1>
        <p className="text-muted text-sm leading-relaxed">Definiendo el estándar de la moda masculina moderna desde 2026.</p>
        <div className="flex gap-4">
          <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">In</span>
          <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">Tw</span>
          <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">Ig</span>
        </div>
      </div>

      <div>
        <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Tienda</h4>
        <ul className="space-y-4 text-sm text-muted">
          <li><a href="#" className="hover:text-primary transition-colors">Novedades</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Hombre</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Mujer</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Accesorios</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Ayuda</h4>
        <ul className="space-y-4 text-sm text-muted">
          <li><a href="#" className="hover:text-primary transition-colors">Envíos</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Devoluciones</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Tallas</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Boletín</h4>
        <p className="text-sm text-muted mb-4">Suscríbete para recibir actualizaciones y ofertas exclusivas.</p>
        <div className="relative">
          <input
            type="email"
            placeholder="Tu email"
            className="w-full bg-secondary border-none rounded-full px-6 py-4 text-sm focus:ring-1 focus:ring-primary outline-none"
          />
          <button className="absolute right-2 top-2 bg-primary text-white text-[10px] px-4 py-2 rounded-full font-bold uppercase">Unirse</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-secondary text-center text-[10px] text-muted uppercase tracking-[0.2em]">
      © 2026 Moda Pura. Todos los derechos reservados.
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollection />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
