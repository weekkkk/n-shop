const { Schema, model } = require('mongoose');

/**
 * * Тип
 */
const TypeSchema = new Schema({
  /**
   * * Название
   */
  name: { type: String, unique: true, required: true },
});

module.exports = model('Type', TypeSchema);
