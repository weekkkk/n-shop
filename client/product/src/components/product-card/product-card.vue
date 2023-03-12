<script lang="ts" setup>
import { IProduct } from '@/interfaces';
import { PropType } from 'vue';

const props = defineProps({
  /**
   * * Продукт
   */
  product: { type: Object as PropType<IProduct>, default: undefined },
});
</script>

<template>
  <div class="product-card f fd-col rg-2" v-if="product">
    <figure class="br-3">
      <img :src="product.image" alt="Фото продукта" />
    </figure>

    <div class="f fd-col rg-1">
      <p class="fw-medium lh-compact">
        {{ product.name }}
      </p>

      <p class="fw-semi-bold">{{ product.price }} р</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  display: inline-flex;
  cursor: pointer;
  width: 200px;
  figure {
    overflow: hidden;
    aspect-ratio: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    transition: 0.25s ease-in-out;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    p {
      color: var(--n-brand);
    }
  }
}
</style>
