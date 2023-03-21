const BasketModel = require('../models/basket-model');
const ApiError = require('../exceptions/api-error');

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
    let basket = await BasketModel.findOne({ userId });
    if (!basket) {
      basket = await this.create(userId);
    }
    basket.productIds = basket.productIds.concat(productIds);
    await basket.save();
  }
  /**
   * * Получить продукты корзины
   */
  async getProducts(userId) {
    const { productIds } = await BasketModel.findOne({ userId });
    return productIds;
  }
  /**
   * * Убрать продукты из корзины
   */
  async removeProducts(userId, productIds) {
    const basket = await BasketModel.findOne({ userId });
    basket.productIds = basket.productIds.filter(
      (productId) => !productIds.includes(productId)
    );
    await basket.save();
    if (!basket.productIds.length) {
      await this.remove(userId);
    }
  }
  /**
   * * Получить продукты корзины
   */
  async getProducts(userId) {
    const basket = await BasketModel.findOne({ userId });
    if (!basket)
      throw ApiError.BadRequest('У данного пользователя нет созданной корзины');
    return basket.productIds;
  }
}

module.exports = new BasketService();
