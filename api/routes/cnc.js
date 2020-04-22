const express = require('express');
const router = express.Router();
const controller = require('../../controllers/cnc')

router.get('/', controller.getAll)
router.get('/departments', controller.getDepartmentAll)
router.get('/departments/:id', controller.getCncByDepartmentId)

module.exports = router;