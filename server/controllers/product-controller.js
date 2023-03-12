const ApiError = require('../exceptions/api-error');
const brandService = require('../service/brand-service');
const productService = require('../service/product-service');
const { ObjectId } = require('mongodb');
const typeService = require('../service/type-service');

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
      const productId = new ObjectId(id);
      const product = await productService.getProductById(productId);
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
      const brandObjId = brandId ? new ObjectId(brandId) : '';
      const typeObjId = typeId ? new ObjectId(typeId) : '';
      const products = await productService.getProducts(brandObjId, typeObjId);
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
