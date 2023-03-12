const { Schema, model } = require('mongoose');

/**
 * * Продукт
 */
const ProductSchema = new Schema({
  /**
   * * Название
   */
  name: { type: String, unique: true, required: true },
  /**
   * * Цена
   */
  price: { type: Number, required: true },
  /**
   * * Фото
   */
  image: { type: String, required: true },
  /**
   * * Бренд
   */
  brandId: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
  /**
   * * Тип
   */
  typeId: { type: Schema.Types.ObjectId, ref: 'Type', required: true },
});

module.exports = model('Product', ProductSchema);
