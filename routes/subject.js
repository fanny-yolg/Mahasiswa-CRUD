const { Router } = require('express');
const router = Router();
const SubjectController = require('../controllers/SubjectController')

router.get('/', SubjectController.getSubject);
router.get('/:id', SubjectController.findById);
router.post('/', SubjectController.addSubject);
router.put('/:id', SubjectController.editSubject);
router.delete('/:id', SubjectController.deleteSubject);

module.exports = router;