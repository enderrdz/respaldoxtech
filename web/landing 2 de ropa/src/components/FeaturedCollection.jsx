import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Camisa Lino Esencial",
        price: "$89.00",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
        category: "Hombre"
    },
    {
        id: 2,
        name: "Pantalón Chino Slim",
        price: "$120.00",
        image: "https://images.unsplash.com/photo-1473966968600-fa804b86862b?q=80&w=1974&auto=format&fit=crop",
        category: "Hombre"
    },
    {
        id: 3,
        name: "Blazer Estructurado",
        price: "$250.00",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
        category: "Saco"
    },
    {
        id: 4,
        name: "Jersey Algodón Supima",
        price: "$75.00",
        image: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=1932&auto=format&fit=crop",
        category: "Hombre"
    }
];

const FeaturedCollection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-4">Colección Destacada</h2>
                        <p className="text-muted max-w-md">Una selección curada de piezas que definen el estilo contemporáneo con un toque clásico.</p>
                    </div>
                    <button className="text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-primary pb-1 hover:text-muted hover:border-muted transition-all text-nowrap">
                        Ver Todos los Productos
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-xl mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                />
                                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-primary py-3 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    Añadir al Carrito
                                </button>
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-muted mb-1">{product.category}</p>
                            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                            <p className="text-muted font-light">{product.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
