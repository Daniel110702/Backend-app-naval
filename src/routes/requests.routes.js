/**
 * Archivo de configuracion de las rutas http de las peticiones 
 * que los suboficiales han realizado o realizaran.
 */
import { Router } from 'express';
const router = Router();

import * as requestsCtrl from '../controllers/requests.controller';
import  { authJwt }  from '../middlewares';
/**
 *  La siguiente porción de codigo signica las creaciones de rutas con los metodos http
 */

router.post('/',[authJwt.verifyToken2], requestsCtrl.createRequest);

router.get('/', requestsCtrl.getRequests);

router.get('/:requestId', requestsCtrl.getRequestById);

router.put('/:requestId', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerador ], requestsCtrl.updateRequestById);

router.delete('/:requestId', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerador], requestsCtrl.deleteRequestById);

export default router;