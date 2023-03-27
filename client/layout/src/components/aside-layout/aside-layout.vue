<script lang="ts" setup></script>

<template>
  <div class="aside-layout container f ai-fs g-3 p-3">
    <aside class="f fd-col p-3 br-3 bg-default">
      <Suspense>
        <RouterView name="aside" />
        <template #fallback> Loading... </template>
      </Suspense>
    </aside>
    <main class="f fd-col p-3 br-3 bg-default">
      <Suspense>
        <RouterView name="main" />
        <template #fallback> Loading... </template>
      </Suspense>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.aside-layout.container {
  max-width: 1024px;
  width: 100%;
  flex-grow: 1;
  aside {
    min-width: 200px;
  }
  main {
    flex-grow: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    aside {
      width: 100%;
    }
  }
}
</style>
