import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://w:123456a@cluster0.5msk202.mongodb.net/?appName=Cluster0';

// --- SCHEMAS ---
const LandingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    url: String,
    category: { type: String, default: 'Web' },
}, { timestamps: true });

const Landing = mongoose.model('Landing', LandingSchema);

// --- LANDINGS DE DEMO ---
const landings = [
    {
        title: "Landing de Zapatos",
        img: "/web/landing%201%20zapatos/src/assets/zapatos.jpg",
        url: "/web/landing%201%20zapatos",
        category: "Web"
    },
    {
        title: "Landing de Ropa",
        img: "/web/landing%202%20de%20ropa/src/assets/ropa.jpg",
        url: "/web/landing%202%20de%20ropa",
        category: "Web"
    },
    {
        title: "Landing de Restaurante",
        img: "/web/landing%203%20de%20restaurantes/src/assets/restaurante.jpg",
        url: "/web/landing%203%20de%20restaurantes",
        category: "Web"
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('[Seed] Conectado a MongoDB');
        
        // Limpiar landings existentes
        await Landing.deleteMany({});
        console.log('[Seed] Landings existentes eliminados');
        
        // Insertar nuevas landings
        await Landing.insertMany(landings);
        console.log('[Seed] Landings de demo insertadas exitosamente');
        
        // Mostrar landings insertadas
        const insertedLandings = await Landing.find();
        console.log('[Seed] Landings en la base de datos:');
        insertedLandings.forEach(landing => {
            console.log(`- ${landing.title}: ${landing.url}`);
        });
        
        await mongoose.disconnect();
        console.log('[Seed] Conexión a MongoDB cerrada');
        
    } catch (error) {
        console.error('[Seed] Error:', error);
        process.exit(1);
    }
}

seedDatabase();