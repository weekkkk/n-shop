const { Schema, model } = require('mongoose');

/**
 * * Корзина
 */
const BasketSchema = new Schema({
  /**
   * * Пользователь
   */
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  /**
   * * Продукты
   */
  productIds: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = model('Basket', BasketSchema);
