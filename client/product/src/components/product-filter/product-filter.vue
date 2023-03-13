<script lang="ts" async setup>
import { useBrandStore, useTypeStore } from '@/stores';
import NOption from 'shell/components/option';
import { EType } from 'shell/components/option/enums';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  /**
   * * Id бренда
   */
  brandId: { type: String, default: 'default' },
  /**
   * * Id типа
   */
  typeId: { type: String, default: 'default' },
});

/**
 * * Стор брендов
 */
const brandStore = useBrandStore();
/**
 * * Получить бренды
 */
await brandStore.getBrands();

/**
 * * Стор типов
 */
const typeStore = useTypeStore();
/**
 * * Получить типы
 */
await typeStore.getTypes();

/**
 * * Обновить бренд
 */
function updateBrand(value: string) {
  if (value != 'default') router.push({ params: { brandId: value } });
  else router.push({ params: { brandId: undefined } });
}
/**
 * * Обновить тип
 */
function updateType(value: string) {
  if (value != 'default') router.push({ params: { typeId: value } });
  else router.push({ params: { typeId: undefined } });
}
</script>

<template>
  <div class="product-filter f fd-col rg-3">
    <!-- {{ brandId }} -->
    <!-- {{ typeId }} -->
    <div class="f fd-col rg-2">
      <p class="c-second-100 fw-medium fs-small-p">Бренд</p>

      <ul>
        <NOption
          :model-value="brandId || 'default'"
          @update:model-value="updateBrand"
          name="brand-list"
          value="default"
          :type="EType.Radio"
        >
          все
        </NOption>
        <NOption
          v-for="brand in brandStore.brands"
          :key="brand.id"
          name="brand-list"
          :model-value="brandId"
          @update:model-value="updateBrand"
          :value="brand.id"
          :type="EType.Radio"
        >
          {{ brand.name }}
        </NOption>
      </ul>
    </div>

    <div class="f fd-col rg-2">
      <p class="c-second-100 fw-medium fs-small-p">Тип</p>

      <ul>
        <NOption
          :model-value="typeId || 'default'"
          @update:model-value="updateType"
          name="type-list"
          value="default"
          :type="EType.Radio"
        >
          все
        </NOption>
        <NOption
          v-for="type in typeStore.types"
          :key="type.id"
          name="type-list"
          :model-value="typeId"
          @update:model-value="updateType"
          :value="type.id"
          :type="EType.Radio"
        >
          {{ type.name }}
        </NOption>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-filter {
  ul {
    margin: 0 -16px;
  }
}
</style>
