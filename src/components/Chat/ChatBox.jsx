import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, query, onSnapshot, orderBy, limit } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { Send, User, MessageCircle, X, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBox = () => {
    const { user } = useAuth();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const scrollRef = useRef();

    useEffect(() => {
        if (!user) return;
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = [];
            snapshot.forEach(doc => msgs.push({ id: doc.id, ...doc.data() }));
            setMessages(msgs.reverse());
        });
        return unsubscribe;
    }, [user]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        await addDoc(collection(db, "messages"), {
            text: newMessage,
            createdAt: new Date(),
            uid: user.uid,
            userName: user.email.split('@')[0],
            isAdmin: user.email === 'admin@respaldoxtech.net' // Simple admin check
        });
        setNewMessage('');
    };

    if (!user) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[150]">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl glow-purple hover:scale-110 transition-transform"
                    >
                        <MessageCircle size={32} />
                    </motion.button>
                )}

                {isOpen && (
                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.9 }}
                        className="w-[350px] sm:w-[400px] h-[500px] glass-morphism rounded-[32px] overflow-hidden flex flex-col shadow-2xl border border-white/10"
                    >
                        {/* Header */}
                        <div className="p-6 bg-purple-600 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <User size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white font-outfit uppercase tracking-tight">Coordinación Online</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                        <span className="text-[10px] text-purple-100 font-bold uppercase">En Línea</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                                <Minus size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar bg-black/20">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex flex-col ${msg.uid === user.uid ? 'items-end' : 'items-start'}`}>
                                    <span className="text-[9px] text-gray-500 mb-1 font-bold uppercase tracking-widest px-1">
                                        {msg.isAdmin ? '🔹 COORDINADOR' : msg.userName}
                                    </span>
                                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${msg.uid === user.uid
                                            ? 'bg-purple-600 text-white rounded-tr-none'
                                            : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={scrollRef} />
                        </div>

                        {/* Footer */}
                        <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/5 flex gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Escribe un mensaje..."
                                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="p-2.5 bg-purple-600 rounded-xl text-white hover:scale-105 transition-transform"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatBox;
