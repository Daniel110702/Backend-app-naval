/**
 * Archivo de configuracion para las peticiones http
 * del modelo de datos de usuarios.
 */
import { Router } from 'express';
const router = Router();
import * as userCtrl from '../controllers/user.controller'
import {verifySignup} from '../middlewares'

router.post('/register',verifySignup.checkDuplicateCedula, userCtrl.createUser);
router.post('/login', userCtrl.loginUser);

export default router;