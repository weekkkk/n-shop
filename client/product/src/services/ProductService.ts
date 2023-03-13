import { AxiosResponse } from 'axios';
import $product from '@/api/product';
import { IProduct } from '@/interfaces';
/**
 * * Сервис продукта
 */
export default class ProductService {
  /**
   * * Создание
   * @param name - имя
   */
  static create(name: string): Promise<AxiosResponse<IProduct>> {
    return $product.post<IProduct>('/', { name });
  }
  /**
   * * Получить продукты
   */
  static getProductById(id: string): Promise<AxiosResponse<IProduct>> {
    console.log({ id });
    return $product.get<IProduct>('/' + id);
  }
  /**
   * * Получить продукты
   */
  static getProducts(
    brandId?: string,
    typeId?: string
  ): Promise<AxiosResponse<IProduct[]>> {
    return $product.get<IProduct[]>('/', {
      params: { brandId, typeId },
    });
  }
}
