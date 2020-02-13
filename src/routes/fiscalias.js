const { Router } = require('express');
const router = Router();

const { getFiscalias, createFiscalia, getFiscalia, deleteFiscalia,updateFiscalia} = require('../controllers/fiscalias.controller');

router.route('/')
    .get(getFiscalias)
    .post(createFiscalia)

router.route('/:id')
    .delete(deleteFiscalia )
    .put(updateFiscalia )
    .get(getFiscalia)


module.exports = router;