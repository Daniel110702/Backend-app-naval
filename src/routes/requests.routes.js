import { Router } from 'express';
const router = Router();

import * as requestsCtrl from '../controllers/requests.controller';

router.post('/', requestsCtrl.createRequest);

router.get('/', requestsCtrl.getRequests);

router.get('/:requestId', requestsCtrl.getRequestById);

router.put('/:requestId', requestsCtrl.updateRequestById);

router.delete('/:requestId', requestsCtrl.deleteRequestById);

export default router;