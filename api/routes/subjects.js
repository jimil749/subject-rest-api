const express = require('express');
const router = express.Router();


const subjectController = require('../controllers/subjects');


router.get('/', subjectController.getAll);
router.post('/', subjectController.create);
router.get('/:subjectID', subjectController.getById);
router.put('/:subjectID', subjectController.updateById);
router.delete('/:subjectID', subjectController.deleteById);


module.exports = router;