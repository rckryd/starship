<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="sticky top-0 bg-black/90 backdrop-blur z-10 border-b border-white/10">
        <div class="container">
            <RouterLink to="/" class="select-none block text-3xl md:text-4xl font-bold w-max mx-auto py-4 md:py-6 transition-all hover:drop-shadow-[0_0_.5em_white]">STARSHIPS</RouterLink>
        </div>
    </header>
</template>