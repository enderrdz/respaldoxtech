/**
 * Seed script: Creates the initial admin user in MongoDB.
 * Run once: node seed.mjs
 */
import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://w:123456a@cluster0.5msk202.mongodb.net/respaldoxtech?retryWrites=true&w=majority&appName=Cluster0';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    role: { type: String, default: 'client' },
});

const User = mongoose.model('User', UserSchema);

async function seed() {
    await mongoose.connect(MONGO_URI);
    console.log('[MongoDB] Conectado');

    try {
        await User.create({ email: 'admin@respaldoxtech.net', password: 'Admin2026!', role: 'admin' });
        console.log('[Seed] Admin creado: admin@respaldoxtech.net / Admin2026!');
    } catch (e) {
        if (e.code === 11000) console.log('[Seed] Admin ya existe');
        else console.error(e);
    }

    await mongoose.disconnect();
    console.log('[Seed] Listo');
}

seed();
