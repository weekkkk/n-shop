import { AxiosResponse } from 'axios';
import $type from '@/api/type';
import { IType } from '@/interfaces';
/**
 * * Сервис типа
 */
export default class TypeService {
  /**
   * * Создание
   * @param name - имя
   */
  static create(name: string): Promise<AxiosResponse<IType>> {
    return $type.post<IType>('/', { name });
  }
  /**
   * * Получить типы
   */
  static getTypes(): Promise<AxiosResponse<IType[]>> {
    return $type.get<IType[]>('/');
  }
}
