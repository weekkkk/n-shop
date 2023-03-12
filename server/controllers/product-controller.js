const ApiError = require('../exceptions/api-error');
const productService = require('../service/product-service');

class ProductController {
  /**
   * * Создание
   */
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId } = req.body;
      const { image } = req.files;
      const product = await productService.create(
        name,
        price,
        brandId,
        typeId,
        image
      );
      return res.json(product);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Получить продукт по id
   */
  async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(id);
      return res.json(product);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Получить продукты
   */
  async getProducts(req, res, next) {
    try {
      const { brandId, typeId } = req.query;
      const products = await productService.getProducts(brandId, typeId);
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
