import { AxiosResponse } from 'axios';
import $brand from '@/api/brand';
import { IBrand } from '@/interfaces';
/**
 * * Сервис бренда
 */
export default class BrandService {
  /**
   * * Создание
   * @param name - имя
   */
  static create(name: string): Promise<AxiosResponse<IBrand>> {
    return $brand.post<IBrand>('/', { name });
  }
  /**
   * * Получить бренды
   */
  static getBrands(): Promise<AxiosResponse<IBrand[]>> {
    return $brand.get<IBrand[]>('/');
  }
}
