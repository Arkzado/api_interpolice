import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Rutas de módulos
import authRoutes from './modules/auth/auth.routes.js';
import ciudadanoRoutes from './modules/ciudadanos/ciudadano.routes.js';

const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ mensaje: 'No hay nada aquí, usa /api/ciudadanos o /api/auth 🚀' });
});


// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/ciudadanos', ciudadanoRoutes);

// Archivos estáticos (uploads de fotos y QR)
app.use('/uploads', express.static('uploads'));

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada 🚫' });
});


export default app;
