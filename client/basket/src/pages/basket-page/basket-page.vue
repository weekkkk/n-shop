<script lang="ts" async setup>
import { useBasketStore } from '@/stores';
import BasketLi from '@/components/basket-li';

/**
 * * Стор для работы с карзиной
 */
const basketStore = useBasketStore();

/**
 * * Получене продуктов
 */
await basketStore.getProducts();
</script>

<template>
  {{ basketStore.products }}
  <div v-if="basketStore.products">
    <BasketLi />
  </div>
  <div v-else>
    <h4>У вас в корзине нет товаров</h4>
  </div>
</template>

<style lang="less" scoped></style>
