const { Router } = require('express');
const router = Router();
const StudentController = require('../controllers/StudentController')

router.get('/', StudentController.getStudent);
router.get('/:id', StudentController.findById)
router.post('/', StudentController.addStudent);
router.put('/:id', StudentController.editStudent)
router.delete('/:id', StudentController.deleteStudent)

module.exports = router;