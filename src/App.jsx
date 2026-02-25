import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Smartphone,
  Monitor,
  Image as ImageIcon,
  Video,
  ChevronRight,
  Menu,
  X,
  Layout,
  Layers,
  Zap,
  Star,
  CheckCircle2,
  Send,
  User,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Components
import Login from './components/Auth/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import ChatBox from './components/Chat/ChatBox';

// --- DATA CONSTANTS ---
const SERVICES_DATA = [
  {
    id: 1,
    icon: ImageIcon,
    title: 'Flyers & Branding',
    desc: 'Diseño publicitario de alta conversión para tus campañas digitales.',
    details: 'Creamos una identidad visual única que resuena con tu audiencia. Incluye logotipos, manuales de marca y piezas gráficas para redes sociales, enfocadas 100% en la conversión.',
    landingImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    color: '#9333ea'
  },
  {
    id: 2,
    icon: Video,
    title: 'Contenido E-comm',
    desc: 'Edición de video y fotografía técnica de producto y comerciales.',
    details: 'Producción audiovisual de alta calidad diseñada para maximizar las ventas en plataformas de comercio electrónico. Creamos contenido que detiene el scroll.',
    landingImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    color: '#8b5cf6'
  },
  {
    id: 3,
    icon: Monitor,
    title: 'Sitios Web',
    desc: 'Landing pages y sitios corporativos con estética premium y SEO.',
    details: 'Desarrollamos sitios web rápidos, seguros y optimizados para buscadores. El balance perfecto entre diseño de vanguardia y rendimiento técnico.',
    landingImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
    color: '#fbbf24'
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Aplicaciones nativas para iOS y Android con integración cloud.',
    details: 'Apps robustas con interfaces intuitivas y backend escalable en la nube. Soluciones móviles que impactan en la palma de tu mano.',
    landingImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    color: '#d946ef'
  },
  {
    id: 5,
    icon: Code,
    title: 'Sistemas Web',
    desc: 'Sistemas inteligentes y CRMs diseñados para escalar tu negocio.',
    details: 'Soluciones personalizadas para la gestión de procesos internos, inventarios y relaciones con clientes. Automatización total para tu empresa.',
    landingImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    color: '#3b82f6'
  },
  {
    id: 6,
    icon: Zap,
    title: 'Desktop Apps',
    desc: 'Software robusto para Windows y Mac con rendimiento optimizado.',
    details: 'Aplicaciones de escritorio potentes para tareas que requieren el máximo rendimiento del hardware y una UX fluida.',
    landingImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200',
    color: '#ef4444'
  },
];

const PORTFOLIO_DATA = [
  { id: 1, category: 'Web', title: 'Luxury App', img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?h=600" },
  { id: 2, category: 'Mobile', title: 'Crypto Wallet', img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?h=600" },
  { id: 3, category: 'Web', title: 'SaaS Platform', img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?h=600" },
  { id: 4, category: 'Diseño', title: 'Brand Identity', img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?h=600" },
  { id: 5, category: 'Mobile', title: 'Fitness Tracker', img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?h=600" },
  { id: 6, category: 'Web', title: 'E-commerce Next', img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?h=600" },
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Portafolio', href: '/#ejemplos' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center glow-purple group-hover:rotate-12 transition-transform">
            <Layout className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight font-outfit uppercase">
            Respaldo<span className="text-purple-500">x</span>tech
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}

          {user ? (
            <div className="flex items-center gap-6 border-l border-white/10 pl-6 ml-2">
              <button
                onClick={() => navigate(user.email === 'admin@respaldoxtech.net' ? '/admin' : '/client')}
                className="flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors"
              >
                {user.email === 'admin@respaldoxtech.net' ? <ShieldCheck size={18} /> : <User size={18} />}
                Portal
              </button>
              <button onClick={logout} className="text-xs text-gray-500 hover:text-red-400 transition-colors">Salir</button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all shadow-lg hover:shadow-purple-500/30"
            >
              Portal Clientes
            </button>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((item) => (
                <button key={item.name} onClick={() => handleNavClick(item.href)} className="text-lg font-medium text-left">
                  {item.name}
                </button>
              ))}
              {user ? (
                <button onClick={() => { setIsMenuOpen(false); navigate('/admin'); }} className="w-full py-4 bg-purple-600 rounded-xl font-bold text-center">Mi Portal</button>
              ) : (
                <button onClick={() => { setIsMenuOpen(false); navigate('/login'); }} className="w-full py-4 bg-white text-black rounded-xl font-bold text-center">Acceso Clientes</button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-purple-400 mb-8">
          <Star size={14} className="fill-purple-400" /> Agencia Digital Top #1
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] font-outfit">
          Transformamos <br />
          <span className="text-gradient-purple">Tus Ideas</span> en <span className="text-gradient-gold">Realidad</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
          Diseño UX premium, flyers de impacto y desarrollo web/mobile de alto rendimiento.
          Unimos la estética futurista con la funcionalidad empresarial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="px-10 py-5 bg-purple-600 rounded-2xl font-bold text-lg hover:scale-105 transition-transform glow-purple text-center">
            Empezar Proyecto
          </a>
          <a href="#ejemplos" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md text-center">
            Ver Portafolio
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-40 hidden lg:block"
      >
        <div className="glass-morphism p-4 rounded-3xl rotate-[-12deg] glow-purple w-48 h-64 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" className="w-full h-full object-cover rounded-2xl" alt="Design" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 md:right-40 hidden lg:block"
      >
        <div className="glass-morphism p-4 rounded-3xl rotate-[8deg] glow-gold w-48 h-64 overflow-hidden border-yellow-500/30">
          <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4" className="w-full h-full object-cover rounded-2xl" alt="Development" />
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, details, landingImage, color, onLearnMore }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-morphism p-8 rounded-[32px] group relative overflow-hidden h-full flex flex-col"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity`} style={{ backgroundColor: color }}></div>
    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-purple-500/50 transition-colors">
      <Icon size={32} className="text-white group-hover:text-purple-400 transition-colors" />
    </div>
    <h3 className="text-2xl font-bold mb-4 font-outfit">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">{desc}</p>
    <div
      onClick={() => onLearnMore({ icon: Icon, title, details, landingImage, color })}
      className="flex items-center gap-2 text-purple-400 font-bold cursor-pointer group/link mt-auto"
    >
      Saber más <ChevronRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
    </div>
  </motion.div>
);

const ServiceDrawer = ({ isOpen, onClose, data }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[200] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute top-0 right-0 h-full w-full max-w-2xl bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-8 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                {data.icon && <data.icon size={24} className="text-white" />}
              </div>
              <h2 className="text-2xl font-bold font-outfit uppercase tracking-tight">{data.title}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-y-auto custom-scrollbar">
            <div className="p-8 space-y-12 pb-24">
              {/* Description Section */}
              <section>
                <h3 className="text-xs font-bold text-purple-500 uppercase tracking-[0.2em] mb-4">Sobre el Servicio</h3>
                <p className="text-xl text-gray-300 leading-relaxed font-light italic">
                  "{data.details}"
                </p>
              </section>

              {/* Landing Page Preview */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-[0.2em]">Maqueta de Landing</h3>
                  <span className="text-[10px] text-gray-500 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">PREVIEW v1.0</span>
                </div>
                <div className="relative group overflow-hidden rounded-[32px] border border-white/10 bg-black aspect-video shadow-2xl">
                  <img
                    src={data.landingImage}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
                    alt="Landing Preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-white/20 transition-all">
                      Ver en detalle
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 text-center italic">
                  Representación visual de la estética premium aplicada a este sector.
                </p>
              </section>

              {/* Feature List */}
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: 'Diseño Responsivo', d: 'Optimizado para todos los dispositivos.' },
                  { t: 'SEO Avanzado', d: 'Posicionamiento orgánico desde el primer día.' },
                  { t: 'Velocidad Nitro', d: 'Carga instantánea con tecnologías modernas.' },
                  { t: 'Seguridad SSL', d: 'Transacciones 100% protegidas y seguras.' }
                ].map((feature, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                    <CheckCircle2 size={18} className="text-purple-500 mb-3" />
                    <h4 className="font-bold text-sm text-white mb-1 uppercase tracking-tight font-outfit">{feature.t}</h4>
                    <p className="text-xs text-gray-400">{feature.d}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-8 border-t border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
            <a
              href="#contacto"
              onClick={onClose}
              className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-900/20"
            >
              Consultar sobre este producto <Send size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicios" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Lo que <span className="text-gradient-purple">Construimos</span></h2>
          <p className="text-gray-400 max-w-xl">Desde artes gráficas hasta arquitectura de software compleja, combinamos estética y potencia.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((s) => (
            <ServiceCard
              key={s.id}
              {...s}
              onLearnMore={(data) => setSelectedService(data)}
            />
          ))}
        </div>
      </div>
      <ServiceDrawer
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        data={selectedService || {}}
      />
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('Todo');
  const [dynamicLandings, setDynamicLandings] = useState([]);

  useEffect(() => {
    const fetchLandings = () => {
      fetch('/api/landings')
        .then(r => r.json())
        .then(data => setDynamicLandings(data))
        .catch(console.error);
    };
    fetchLandings();
  }, []);

  const allProjects = [...PORTFOLIO_DATA, ...dynamicLandings];

  const filteredProjects = filter === 'Todo'
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="ejemplos" className="py-32 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">Nuestras <span className="text-gradient-purple">Obras</span></h2>
            <p className="text-gray-400">Demos exclusivas y proyectos entregados a nuestros clientes.</p>
          </div>
          <div className="flex gap-4 p-1 rounded-full bg-white/5 border border-white/10 overflow-x-auto whitespace-nowrap">
            {['Todo', 'Web', 'Mobile', 'Diseño'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full font-bold transition-all ${filter === cat
                  ? 'bg-purple-600 text-white glow-purple'
                  : 'text-gray-500 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[32px] overflow-hidden border border-white/10 aspect-[4/5] bg-white/5"
              >
                <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Overlay for dynamic projects with URLs */}
                {project.url && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-white text-black rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      Ver Demo Online <ExternalLink size={18} />
                    </a>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h4 className="text-xl font-bold text-white uppercase font-outfit">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass-morphism rounded-[48px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/30 blur-[100px] -mr-40 -mt-40"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-outfit">¿Listo para <br /><span className="text-gradient-purple">Empezar?</span></h2>
              <p className="text-gray-400 mb-12 text-lg">Contáctanos ahora y obtén un presupuesto personalizado para tu próximo gran proyecto.</p>
              <div className="space-y-4">
                <div className="text-xl font-bold text-white">+58 414-7235657</div>
                <div className="text-xl font-bold text-purple-400">contacto@respaldoxtech.net</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="TU NOMBRE"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:border-purple-500 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="TU EMAIL"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:border-purple-500 outline-none transition-colors"
              />
              <textarea
                placeholder="PROYECTO..."
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:border-purple-500 outline-none transition-colors"
              ></textarea>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${formState === 'success'
                  ? 'bg-green-600 glow-green'
                  : 'bg-purple-600 glow-purple hover:scale-[1.02]'
                  }`}
              >
                {formState === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : formState === 'success' ? (
                  <> <CheckCircle2 size={24} /> Mensaje Enviado! </>
                ) : (
                  <> <Send size={20} /> Enviar Mensaje </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainSite = () => (
  <>
    <Hero />
    <Services />
    <Portfolio />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-[#020202]">
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/30 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/client" element={<div className="pt-32 px-6 text-center"><h1>Portal de Cliente en Construcción</h1><p>Usa el chat abajo para coordinar con nosotros.</p></div>} />
      </Routes>

      <ChatBox />

      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-600 text-sm">
        &copy; 2026 RespaldoXTech. Diseñado para el Futuro.
      </footer>
    </div>
  );
}

export default App;
