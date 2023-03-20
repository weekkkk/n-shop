const express = require('express');
const router = express.Router();

const basketController = require('../controllers/basket-controller');

/**
 * * Создать корзину
 */
router.post('/', basketController.create);
/**
 * * Получить продукты
 */
router.get('/products', basketController.getProducts);

module.exports = router;
