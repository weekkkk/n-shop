const express = require('express');
const router = express.Router();

const basketController = require('../controllers/basket-controller');

/**
 * * Получить продукты
 */
router.get('/products', basketController.getProducts);
/**
 * * Добавить продукты
 */
router.post('/products',basketController.addProducts);
/**
 * * Бурать продукты из корзины
 */
router.put('/products', basketController.removeProducts);

module.exports = router;
