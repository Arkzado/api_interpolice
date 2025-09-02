import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db.js';

export const Ciudadano = sequelize.define('Ciudadano', {
  codigo: { type: DataTypes.STRING(30), primaryKey: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  apellido: { type: DataTypes.STRING(100) },
  fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
  planeta_origen: { type: DataTypes.STRING(100), allowNull: false },
  planeta_residencia: { type: DataTypes.STRING(100), allowNull: false },
  estado: { type: DataTypes.ENUM('vivo','muerto','congelado'), allowNull: false, defaultValue: 'vivo' },
  foto: { type: DataTypes.STRING(255) },
  qr: { type: DataTypes.STRING(255) }
}, { tableName: 'ciudadanos' });
