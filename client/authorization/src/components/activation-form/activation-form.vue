<script lang="ts" setup>
import { useRouter } from 'vue-router';
import NButton from 'shell/components/button';
import { EColor } from 'shell/components/enums';
import { useUserStore } from '@/stores';

const router = useRouter();

/**
 * * Стор пользователя
 */
const userStore = useUserStore();
/**
 * * Отменить регистрацию пользователя
 */
function cancelRegistration() {
  if (!userStore.user) return;
  userStore.cancelRegistration(userStore.user.id).then(() => {
    router.push({ name: 'registration' });
  });
}
</script>

<template>
  <div class="f fd-col rg-2">
    <div class="p-3 alert">
      <p>
        На ваш email
        <span class="c-brand fw-medium"> {{ userStore.user?.email }} </span>
        было отправлено письмо с ссылкой для активации аккаунта.
      </p>
    </div>

    <p>Если вы ввели неверный email, то воспользуйтесь отменой регистрации.</p>
  </div>

  <div class="f fd-col ai-c rg-3">
    <NButton @click="cancelRegistration" :color="EColor.Second" no-fill>
      Отмена регистрации
    </NButton>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--n-brand);
    opacity: 0.1;
    border-radius: var(--n-indent-3);
  }
  > * {
    position: relative;
  }
}
</style>
