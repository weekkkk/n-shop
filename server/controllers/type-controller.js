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
      return res.json(type);
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
      return res.json(types);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TypeController();
