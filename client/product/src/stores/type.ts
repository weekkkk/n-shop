import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IType } from '@/interfaces';
import { TypeService } from '@/services';

/**
 * * Стор для работы с брендами
 */
const useTypeStore = defineStore('type', () => {
  /**
   * * Бренды
   */
  const types = ref<IType[]>([]);

  /**
   * * Создать бренд
   * @param name - имя бренда
   */
  async function create(name: string) {
    try {
      const response = await TypeService.create(name);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * * Получить бренды
   */
  async function getTypes() {
    try {
      const response = await TypeService.getTypes();
      console.log(response);
      types.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return { create, getTypes };
});

export default useTypeStore;
