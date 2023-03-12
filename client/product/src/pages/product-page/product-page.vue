<script lang="ts" async setup>
import { useProductStore } from '@/stores';

const props = defineProps({
  /**
   * * Id продукта
   */
  id: { type: String, default: '' },
});

/**
 * * Стор продуктов
 */
const productStore = useProductStore();
/**
 * * Получть продукт
 */
await productStore.getProductById(props.id);
</script>

<template>
  {{ productStore.product }}
</template>

<style lang="less" scoped></style>
