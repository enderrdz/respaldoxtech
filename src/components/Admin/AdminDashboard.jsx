import React, { useState, useEffect } from 'react';
import { Trash2, Plus, ExternalLink, Image as ImageIcon } from 'lucide-react';

const AdminDashboard = () => {
    const [landings, setLandings] = useState([]);
    const [newLanding, setNewLanding] = useState({ title: '', img: '', url: '', category: 'Web' });

    const fetchLandings = () => {
        fetch('/api/landings')
            .then(r => r.json())
            .then(setLandings)
            .catch(console.error);
    };

    useEffect(() => {
        fetchLandings();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!newLanding.title || !newLanding.img) return;
        try {
            await fetch('/api/landings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newLanding)
            });
            setNewLanding({ title: '', img: '', url: '', category: 'Web' });
            fetchLandings();
        } catch (err) {
            console.error('Error añadiendo landing:', err);
        }
    };

    const handleDelete = async (id) => {
        await fetch(`/api/landings/${id}`, { method: 'DELETE' });
        fetchLandings();
    };

    return (
        <div className="pt-32 px-6 pb-20 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 font-outfit">Panel de <span className="text-gradient-purple">Administración</span></h1>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Form Section */}
                <div className="lg:col-span-1">
                    <div className="glass-morphism p-8 rounded-[32px] sticky top-32">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Plus size={20} className="text-purple-500" /> Añadir Nueva Demo
                        </h2>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Título del Proyecto</label>
                                <input
                                    type="text"
                                    value={newLanding.title}
                                    onChange={(e) => setNewLanding({ ...newLanding, title: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Ej: Minimalist E-commerce"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Imagen (URL de Miniatura)</label>
                                <input
                                    type="text"
                                    value={newLanding.img}
                                    onChange={(e) => setNewLanding({ ...newLanding, img: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 transition-colors"
                                    placeholder="https://images.unsplash..."
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">URL de la Demo</label>
                                <input
                                    type="text"
                                    value={newLanding.url}
                                    onChange={(e) => setNewLanding({ ...newLanding, url: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 transition-colors"
                                    placeholder="https://mi-demo.vercel.app"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Categoría</label>
                                <select
                                    value={newLanding.category}
                                    onChange={(e) => setNewLanding({ ...newLanding, category: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 transition-colors appearance-none"
                                >
                                    <option value="Web">Web</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Diseño">Diseño</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full py-4 bg-purple-600 rounded-xl font-bold hover:scale-[1.02] transition-transform mt-4">
                                Publicar en la Web
                            </button>
                        </form>
                    </div>
                </div>

                {/* List Section */}
                <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {landings.map((item) => (
                            <div key={item._id} className="glass-morphism rounded-3xl overflow-hidden group border border-white/5">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button onClick={() => handleDelete(item._id)} className="p-3 bg-red-500 rounded-xl hover:scale-110 transition-transform">
                                            <Trash2 size={20} />
                                        </button>
                                        {item.url && (
                                            <a href={item.url} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-xl hover:scale-110 transition-transform">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">{item.category}</span>
                                    <h3 className="font-bold font-outfit mt-1">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                        {landings.length === 0 && (
                            <div className="col-span-full py-20 text-center border-2 border-dashed border-white/10 rounded-[40px]">
                                <ImageIcon size={48} className="mx-auto text-gray-700 mb-4" />
                                <p className="text-gray-500">No hay landings gestionadas aún.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
