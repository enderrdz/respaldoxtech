import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://w:123456a@cluster0.5msk202.mongodb.net/?appName=Cluster0';

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 segundos timeout
    socketTimeoutMS: 45000, // 45 segundos timeout
})
    .then(() => console.log('[MongoDB] Conectado a Atlas'))
    .catch(err => {
        console.error('[MongoDB] Error de conexión:', err.message);
        console.error('[MongoDB] Código de error:', err.code);
        console.error('[MongoDB] Detalles:', {
            name: err.name,
            stack: err.stack,
            message: err.message
        });
        
        // Intentar conectar con credenciales por separado
        if (err.message.includes('authentication failed')) {
            console.log('[MongoDB] Error de autenticación detectado');
            console.log('[MongoDB] Por favor verifica:');
            console.log('  - Usuario y contraseña correctos');
            console.log('  - IP permitida en MongoDB Atlas');
            console.log('  - Base de datos existente');
        }
    });

// --- SCHEMAS ---
const LandingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    url: String,
    category: { type: String, default: 'Web' },
}, { timestamps: true });

const MessageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    uid: String,
    userName: String,
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    role: { type: String, default: 'client' },
});

const Landing = mongoose.model('Landing', LandingSchema);
const Message = mongoose.model('Message', MessageSchema);
const User = mongoose.model('User', UserSchema);

// --- API ROUTES ---

// Landings
app.get('/api/landings', async (req, res) => {
    const landings = await Landing.find().sort({ createdAt: -1 });
    res.json(landings);
});

app.post('/api/landings', async (req, res) => {
    const landing = new Landing(req.body);
    await landing.save();
    res.status(201).json(landing);
});

app.delete('/api/landings/:id', async (req, res) => {
    await Landing.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
});

// Messages (Chat)
app.get('/api/messages', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: 1 }).limit(100);
    res.json(messages);
});

app.post('/api/messages', async (req, res) => {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
});

// Auth (simple)
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    res.json({ uid: user._id, email: user.email, role: user.role });
});

app.post('/api/auth/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ uid: user._id, email: user.email, role: user.role });
    } catch (err) {
        res.status(409).json({ error: 'El email ya existe' });
    }
});

// --- SERVE FRONTEND ---
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Catch-all route for SPA (must be last)
app.get(/^(?!\/api\/)/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

// --- START ---
app.listen(PORT, () => {
    console.log(`[Server] Escuchando en puerto ${PORT}`);
});
