<script lang="ts" setup>
import ProductCard from './components/product-card/product-card.vue';
import ProductList from './components/product-list/product-list.vue';
</script>

<template>
  <h1 class="c-brand fw-semi-bold">product started</h1>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style lang="scss"></style>
