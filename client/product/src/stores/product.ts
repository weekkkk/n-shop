import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IProduct } from '@/interfaces';
import { ProductService } from '@/services';

/**
 * * Стор для работы с брендами
 */
const useProductStore = defineStore('product', () => {
  /**
   * * Бренды
   */
  const products = ref<IProduct[]>([]);

  /**
   * * Создать бренд
   * @param name - имя бренда
   */
  async function create(name: string) {
    try {
      const response = await ProductService.create(name);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * * Получить бренды
   */
  async function getProducts(brandId?: string, typeId?: string) {
    try {
      const response = await ProductService.getProducts(brandId, typeId);
      console.log(response);
      products.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return { create, getProducts };
});

export default useProductStore;
