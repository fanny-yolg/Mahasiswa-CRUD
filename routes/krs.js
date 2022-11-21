const { Router } = require('express');
const router = Router();
const KRSController = require('../controllers/KRSController')

router.get('/', KRSController.getKRS);
router.get('/:id', KRSController.findById)
router.post('/', KRSController.addKRS);
router.put('/:id', KRSController.editKRS)
router.delete('/:id', KRSController.deleteKRS)

module.exports = router;