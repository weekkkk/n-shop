const ApiError = require('../exceptions/api-error');
const brandService = require('../service/brand-service');

class BrandController {
  /**
   * * Создание
   */
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const brand = await brandService.create(name);
      return res.json(brand);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Получить бренды
   */
  async getBrands(req, res, next) {
    try {
      const brands = await brandService.getBrands();
      return res.json(brands);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BrandController();
