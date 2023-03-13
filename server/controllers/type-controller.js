const TypeDto = require('../dtos/type-dto');
const ApiError = require('../exceptions/api-error');
const typeService = require('../service/type-service');

class TypeController {
  /**
   * * Создание
   */
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const type = await typeService.create(name);
      const typeData = new TypeDto(type);
      return res.json(typeData);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Получить типы
   */
  async getTypes(req, res, next) {
    try {
      const types = await typeService.getTypes();
      const typesData = types.map((type) => new TypeDto(type));
      return res.json(typesData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TypeController();
