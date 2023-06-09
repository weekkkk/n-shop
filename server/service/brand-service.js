const BrandModel = require('../models/brand-model');

/**
 * * Сервис бренда
 */
class BrandService {
  /**
   * * Создаие бренда
   */
  async create(name) {
    const brand = await BrandModel.create({ name });
    return brand;
  }
  /**
   * * Получить бренд по id
   */
  async getBrandById(id) {
    const brand = await BrandModel.findById(id);
    return brand;
  }
  /**
   * * Получить бренды
   */
  async getBrands() {
    const brands = await BrandModel.find();
    return brands;
  }
}

module.exports = new BrandService();
