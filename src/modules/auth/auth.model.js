import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db.js';
import { Rol } from '../roles/rol.model.js';

export const Usuario = sequelize.define('Usuario', {
  codigo: { type: DataTypes.STRING(30), primaryKey: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(120), allowNull: false, unique: true },
  passwordHash: { type: DataTypes.STRING(120), allowNull: false },
  rolCodigo: {
    type: DataTypes.STRING(30),
    references: { model: Rol, key: 'codigo' }
  }
}, { tableName: 'usuarios' });

Rol.hasMany(Usuario, { foreignKey: 'rolCodigo' });
Usuario.belongsTo(Rol, { foreignKey: 'rolCodigo' });
