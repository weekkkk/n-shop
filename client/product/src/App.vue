<script lang="ts" setup>
import ProductCard from './components/product-card/product-card.vue';
import ProductList from './components/product-list/product-list.vue';
</script>

<template>
  <h1 class="c-brand fw-semi-bold">product started</h1>
  <!-- <RouterView /> -->
  <ProductList>
    <ProductCard
      :product="{
        id: '1',
        brand: {
          id: '1',
          name: 'test',
        },
        type: {
          id: '1',
          name: 'test',
        },
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        name: 'NameNameNameNameNameNameNameNameNameNameNameNameNameNameNameName',
        price: 999999999999,
      }"
    />
  </ProductList>
</template>

<style lang="scss"></style>
