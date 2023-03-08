/**
 * Archivo de configuracion para la autenticacion de usuarios.
 */
import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import  { authJwt, verifySignup }  from '../middlewares';

// Creacion de las rutas login y register para admin y moderador con el metodo http
router.post('/signup',verifySignup.checkDuplicateCedula, authCtrl.signUp)
router.post('/signin', authCtrl.signIn)


export default router;