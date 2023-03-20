const BasketDto = require('../dtos/basket-dto');
const ApiError = require('../exceptions/api-error');
const basketService = require('../service/basket-service');
const tokenService = require('../service/token-service');
const productService = require('../service/product-service');

class BasketController {
  /**
   * * Создание
   */
  async create(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const { userId } = await tokenService.findToken(refreshToken);
      const basket = await basketService.create(userId);
      const basketData = new BasketDto(basket);
      return res.json(basketData);
    } catch (e) {
      next(e);
    }
  }
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
}

module.exports = new BasketController();
