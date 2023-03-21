import { BasketService } from '@/services';
import { defineStore } from 'pinia';
import { IProduct } from 'product/interfaces';
import { readonly, ref } from 'vue';

/**
 * * Стор для работы с корзиной
 */
const useBasketStore = defineStore('basket', () => {
  /**
   * * Продукты корзины
   */
  const products = ref<IProduct[]>();

  /**
   * * Получить продукты корзины пользователя
   */
  async function getProducts() {
    try {
      const response = await BasketService.getProducts();
      console.log(response);
      products.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * * Добавить продукты в корзину пользователя
   */
  async function addProducts(productIds: string[]) {
    try {
      const response = await BasketService.addProducts(productIds);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * * Удалить продукты из корзины пользователя
   */
  async function removeProducts(productIds: string[]) {
    try {
      const response = await BasketService.addProducts(productIds);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    products: readonly(products),
    getProducts,
    addProducts,
    removeProducts,
  };
});

export default useBasketStore;
