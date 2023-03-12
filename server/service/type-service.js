const TypeModel = require('../models/type-model');

/**
 * * Сервис бренда
 */
class TypeService {
  /**
   * * Создаие бренда
   */
  async create(name) {
    const type = await TypeModel.create({ name });
    return type;
  }
  /**
   * * Получить бренды
   */
  async getTypes() {
    const types = await TypeModel.find();
    return types;
  }
}

module.exports = new TypeService();
