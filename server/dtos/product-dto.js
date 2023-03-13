const BrandDto = require('./brand-dto');
const TypeDto = require('./type-dto');

/**
 * * Данные типа, отправляемые на клиент
 */
module.exports = class ProductDto {
  /**
   * * Название
   */
  name;
  /**
   * * Цена
   */
  price;
  /**
   * * Фото
   */
  image;
  /**
   * * Бренд
   */
  brand;
  /**
   * * Тип
   */
  type;

  constructor(model, brand, type) {
    this.name = model.name;
    this.id = model._id;
    this.price = model.price;
    this.image = `http://localhost:${process.env.PORT}/${model.image}`;
    this.brand = new BrandDto(brand);
    this.type = new TypeDto(type);
  }
};
