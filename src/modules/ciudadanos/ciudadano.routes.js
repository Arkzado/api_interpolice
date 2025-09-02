import { Router } from 'express';
import { authRequired } from '../../middlewares/auth.js';
import { hasRole } from '../../middlewares/roles.js';
import { upload } from '../../middlewares/upload.js';
import {
  createCiudadano,
  listCiudadanos,
  getCiudadano,
  updateCiudadano,
  deleteCiudadano
} from './ciudadano.controller.js';

const r = Router();

r.get('/', authRequired, listCiudadanos);
r.get('/:codigo', getCiudadano);

r.post('/', authRequired, hasRole('ADMIN','POLICIA'), upload.single('foto'), createCiudadano);
r.put('/:codigo', authRequired, hasRole('ADMIN','POLICIA'), upload.single('foto'), updateCiudadano);
r.delete('/:codigo', authRequired, hasRole('ADMIN'), deleteCiudadano);

export default r;
