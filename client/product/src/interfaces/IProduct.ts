import IType from './IType';
import IBrand from './IBrand';
/**
 * * Продукт
 */
export default interface IProduct {
  /**
   * * Уникальный ключ
   */
  id: string;
  /**
   * * Название
   */
  name: string;
  /**
   * * Фото
   */
  image: string;
  /**
   * * Цена
   */
  price: number;
  /**
   * * Тип
   */
  type: IType;
  /**
   * * Бренд
   */
  brand: IBrand;
}
