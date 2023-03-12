<script lang="ts" setup></script>

<template>
  <div class="aside-layout container f ai-fs g-3 p-3">
    <aside class="f fd-col p-3 br-3 bg-default">
      <RouterView name="aside" />
    </aside>
    <main class="f fd-col p-3 br-3 bg-default">
      <RouterView name="main" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.aside-layout.container {
  max-width: 1024px;
  width: 100%;
  flex-grow: 1;
  aside {
    width: 200px;
  }
  main {
    flex-grow: 1;
  }
}
</style>
