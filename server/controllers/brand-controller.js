const BrandDto = require('../dtos/brand-dto');
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
      const brandData = new BrandDto(brand);
      return res.json(brandData);
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
      const brandsData = brands.map((brand) => new BrandDto(brand));
      return res.json(brandsData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BrandController();
