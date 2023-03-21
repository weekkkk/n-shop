import { AxiosResponse } from 'axios';
import $basket from '@/api/basket';
import { IProduct } from 'product/interfaces';
/**
 * * Сервис пользователя
 */
export default class UserService {
  /**
   * * Получить продукты корзины
   */
  static getProducts(): Promise<AxiosResponse<IProduct[]>> {
    return $basket.get<IProduct[]>('/products');
  }
  /**
   * * Добавить продукты в корзину
   * @param productIds - id продуктов, которые необходимо добавить
   */
  static addProducts(productIds: string[]): Promise<AxiosResponse<IProduct[]>> {
    return $basket.post('/products', { productIds });
  }
  /**
   * * Добавить продукты в корзину
   * @param productIds - id продуктов, которые необходимо удалить
   */
  static removeProducts(productIds: string[]): Promise<AxiosResponse<IProduct[]>> {
    return $basket.put('/products', { productIds });
  }
}
