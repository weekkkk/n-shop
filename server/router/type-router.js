const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middleware');
const typeController = require('../controllers/type-controller');

router.post('/', typeController.create);
router.get('/', typeController.getTypes);

module.exports = router;
