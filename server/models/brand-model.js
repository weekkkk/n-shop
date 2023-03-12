const { Schema, model } = require('mongoose');

/**
 * * Бренд
 */
const BrandSchema = new Schema({
  /**
   * * Название
   */
  name: { type: String, unique: true, required: true },
});

module.exports = model('Brand', BrandSchema);
