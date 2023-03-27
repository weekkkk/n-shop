<script lang="ts" setup></script>

<template>
  <header class="f jc-c px-3 bg-default">
    <div class="container">
      <div class="f cg-3 py-3">
        <h3 class="lh-no">n<span class="c-brand">shop</span></h3>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  .container {
    max-width: 1024px;
    width: 100%;
  }
}
</style>
