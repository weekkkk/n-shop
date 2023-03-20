const BasketModel = require('../models/basket-model');

/**
 * * Сервис корзины
 */
class BasketService {
  /**
   * * Создаие корзины
   */
  async create(userId) {
    const basket = await BasketModel.create({ userId });
    return basket;
  }
  /**
   * * Удаление корзины
   */
  async remove(userId) {
    const basket = await BasketModel.findOneAndDelete({ userId });
    return basket;
  }
  /**
   * * Добавление продуктов в корзину
   */
  async addProducts(userId, productIds) {
    const basket = await BasketModel.findOne({ userId });
    basket.productIds = basket.productIds.concat(productIds);
    return basket.save();
  }
  /**
   * * Получить продукты корзины
   */
  async getProducts(userId) {
    const { productIds } = await BasketModel.findOne({ userId });
    return productIds;
  }
}

module.exports = new BasketService();
