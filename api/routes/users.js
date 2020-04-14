const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user')

router.get('/', controller.getAll)
router.get('/tabid/:TABID/log', controller.getLogByTabId)
router.get('/:USERID/log', controller.getLogByUserId);
router.get('/log', controller.getLog);
module.exports = router;