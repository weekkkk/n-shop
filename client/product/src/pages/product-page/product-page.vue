<script lang="ts" async setup>
import { useProductStore } from '@/stores';
import NButton from 'shell/components/button';
import { EColor, ESize } from 'shell/components/enums';

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
  <div v-if="productStore.product" class="product-page f g-3">
    <figure class="br-3">
      <img :src="productStore.product.image" alt="Фото продукта" />
    </figure>

    <div class="f fd-col rg-3">
      <h1 class="fw-semi-bold">
        {{ productStore.product.name }}
      </h1>

      <div class="f g-2">
        <NButton :color="EColor.Second" :size="ESize.Small" no-fill>
          {{ productStore.product.brand.name }}
        </NButton>
        <NButton :color="EColor.Second" :size="ESize.Small" no-fill>
          {{ productStore.product.type.name }}
        </NButton>
      </div>

      <div class="f g-3">
        <NButton :color="EColor.Brand"> Купить </NButton>
        <NButton :color="EColor.Brand" no-fill> В корзину </NButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-page {
  figure {
    aspect-ratio: 1;
    overflow: hidden;
    width: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > div {
    flex-grow: 1;
  }
}
</style>
