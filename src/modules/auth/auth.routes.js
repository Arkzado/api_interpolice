import { Router } from 'express';
import { login, seedAdmin } from './auth.controller.js';

const r = Router();

r.post('/login', login);
r.post('/seed-admin', seedAdmin);

export default r;
