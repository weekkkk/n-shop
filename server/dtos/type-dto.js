/**
 * * Данные типа, отправляемые на клиент
 */
module.exports = class TypeDto {
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
