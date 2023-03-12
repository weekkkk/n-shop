<script lang="ts" async setup>
import ProductCard from '@/components/product-card/product-card.vue';
import { useProductStore } from '@/stores';

const props = defineProps({
  /**
   * * Id бренда
   */
  brandId: { type: String, default: undefined },
  /**
   * * Id типа
   */
  typeId: { type: String, default: undefined },
});

/**
 * * Стор продуктов
 */
const productStore = useProductStore();
/**
 * * Получть продукт
 */
await productStore.getProducts(props.brandId, props.typeId);
</script>

<template>
  <div class="product-list">
    <ProductCard
      class="product"
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(124px, 1fr));
}
</style>
