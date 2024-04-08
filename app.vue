<script setup>
    const { locale } = useI18n()
    if (locale.value === 'ka') {
        fontFamily: 'omnes-georgian'
    }
</script>
<template>
  <div
    :class="locale === 'ka' ? 'isGeorgian' : ''"
  >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
  </div>
</template>
<style lang="scss">
.isGeorgian {
    --font-primary: 'omnes-georgian';
    font-family: var(--font-primary);
    .handwriting {
        font-family: var(--font-primary);
        font-weight: 500;
        font-style: normal;
    }
}
.page-enter-active,
.page-leave-active {
transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
opacity: 0;
filter: blur(1rem);
}
</style>