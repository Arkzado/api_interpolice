import 'dotenv/config';
import { sequelize } from './config/db.js';
import app from './app.js';

// Modelos (para sincronizar)
import './modules/roles/rol.model.js';
import './modules/auth/auth.model.js';
import './modules/ciudadanos/ciudadano.model.js';

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión con la base de datos establecida.');

    await sequelize.sync({ alter: true }); 
    console.log('📦 Modelos sincronizados.');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar:', error);
  }
}

main();
