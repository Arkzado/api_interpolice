import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Rol } from '../roles/rol.model.js';
import { Usuario } from './auth.model.js';

export async function seedAdmin(req, res) {
  await Rol.findOrCreate({ where: { codigo: 'ADMIN' }, defaults: { nombre: 'Administrador' } });
  await Rol.findOrCreate({ where: { codigo: 'POLICIA' }, defaults: { nombre: 'Policía' } });

  const email = 'admin@gmail.com';
  const exists = await Usuario.findOne({ where: { email } });

  if (!exists) {
    const passwordHash = await bcrypt.hash('admin123', 10);
    await Usuario.create({
      nombre: 'Admin',
      email,
      passwordHash,
      rolCodigo: 'ADMIN'
    });
  }

  res.json({ ok: true });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await Usuario.findOne({ where: { email }, include: Rol });
  if (!user) return res.status(400).json({ error: 'Credenciales inválidas' });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(400).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign(
    { codigo: user.codigo, rol: user.Rol?.codigo || 'POLICIA', email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_TTL || '1d' }
  );
  res.json({ token });
}
