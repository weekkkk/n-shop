import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IProduct } from '@/interfaces';
import { ProductService } from '@/services';

/**
 * * Стор для работы с продуктами
 */
const useProductStore = defineStore('product', () => {
  /**
   * * Продукт
   */
  const product = ref<IProduct>();
  /**
   * * Продукты
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
   * * Получить продукт по id
   */
  async function getProductById(id: string) {
    try {
      const response = await ProductService.getProductById(id);
      console.log(response);
      product.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * * Получить продукты
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

  return { product, products, create, getProductById, getProducts };
});

export default useProductStore;
