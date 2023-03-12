import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IBrand } from '@/interfaces';
import { BrandService } from '@/services';

/**
 * * Стор для работы с брендами
 */
const useBrandStore = defineStore('brand', () => {
  /**
   * * Бренды
   */
  const brands = ref<IBrand[]>([]);

  /**
   * * Создать бренд
   * @param name - имя бренда
   */
  async function create(name: string) {
    try {
      const response = await BrandService.create(name);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * * Получить бренды
   */
  async function getBrands() {
    try {
      const response = await BrandService.getBrands();
      console.log(response);
      brands.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return { brands, create, getBrands };
});

export default useBrandStore;
