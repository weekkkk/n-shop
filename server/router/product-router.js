const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middleware');
const productController = require('../controllers/product-controller');

router.post('/', productController.create);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

module.exports = router;
