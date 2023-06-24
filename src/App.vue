<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp home="true" />
  <main class="min-h-[calc(100vh_-_7.875rem)] md:min-h-[calc(100vh_-_9.125rem)] py-10 sm:py-14 md:py-18">
    <RouterView />
  </main>
  <FooterComp />
</template>