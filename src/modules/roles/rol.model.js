import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db.js';

export const Rol = sequelize.define('Rol', {
  codigo: { type: DataTypes.STRING(30), primaryKey: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false, unique: true }
}, {
  tableName: 'roles',
  timestamps: false
});
