<script lang="ts" setup></script>

<template>
  <div class="base-layout w-100 f fd-col ai-c p-3">
    <main class="container f fd-col p-3 br-3 bg-default">
      <Suspense>
        <RouterView />
        <template #fallback> loading... </template>
      </Suspense>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.base-layout {
  flex-grow: 1;
  main {
    max-width: 1024px;
    width: 100%;
  }
}
</style>
