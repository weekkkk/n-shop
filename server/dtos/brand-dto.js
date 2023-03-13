/**
 * * Данные бренда, отправляемые на клиент
 */
module.exports = class BrandDto {
  /**
   * * Название
   */
  name;
  /**
   * * Уникальный ключ
   */
  id;

  constructor(model) {
    this.name = model.name;
    this.id = model._id;
  }
};
