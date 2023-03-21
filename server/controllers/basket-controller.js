const ApiError = require('../exceptions/api-error');
const basketService = require('../service/basket-service');
const tokenService = require('../service/token-service');
const productService = require('../service/product-service');

class BasketController {
  /**
   * * Получить продукты корзины
   */
  async getProducts(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const { userId } = await tokenService.findToken(refreshToken);
      const productIds = await basketService.getProducts(userId);

      const products = [];

      for (let productId of productIds) {
        const product = await productService.getProductById(productId);
        products.push(product);
      }

      return res.json(products);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Добавить продукты в корзину
   */
  async addProducts(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const { userId } = await tokenService.findToken(refreshToken);
      const { productIds } = req.body;

      await basketService.addProducts(userId, productIds);

      return res.json();
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Убрать продукты из корзины
   */
  async removeProducts(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const { userId } = await tokenService.findToken(refreshToken);
      const { productIds } = req.body;

      await basketService.removeProducts(userId, productIds);

      return res.json();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BasketController();
