const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const path = require('path');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const ProductModel = require('../models/product-model');

/**
 * * Сервис продукта
 */
class ProductService {
  /**
   * * Создаие продукта
   */
  async create(name, price, brandId, typeId, image) {
    const imageName = uuid.v4() + '.jpg';
    image.mv(path.resolve(__dirname, '..', 'static', imageName));
    const product = await ProductModel.create({
      name,
      price,
      brandId,
      typeId,
      image: imageName,
    });
    return product;
  }
  /**
   * * Получить продукт по id
   */
  async getProducts(id) {
    const product = await ProductModel.findById(id);
    return product;
  }
  /**
   * * Получить продукты
   */
  async getProducts(brandId = '', typeId = '') {
    let products;
    if (brandId && typeId) {
      products = await ProductModel.find({ brandId, typeId });
    } else if (brandId) {
      products = await ProductModel.find({ brandId });
    } else if (typeId) {
      products = await ProductModel.find({ typeId });
    } else {
      products = await ProductModel.find();
    }
    return products;
  }
}

module.exports = new ProductService();
