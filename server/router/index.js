const express = require('express');
const router = express.Router();

const brandRouter = require('./brand-router');
const typeRouter = require('./type-router');
const productRouter = require('./product-router');
const basketRouter = require('./basket-router');
const authRouter = require('./auth-router');

router.use('/authorization', authRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);
router.use('/basket', basketRouter);

module.exports = router;
