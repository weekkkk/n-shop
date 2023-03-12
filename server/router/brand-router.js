const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middleware');
const brandController = require('../controllers/brand-controller');

router.post('/', brandController.create);
router.get('/', brandController.getBrands);

module.exports = router;
