<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
    <footer class="py-4">
        <div class="container text-center">
            &copy; {{ currentYear }} <a href="https://rckryd.com" target="_blank" class="font-medium hover:drop-shadow-[0_0_.5em_#40c4f5]">RCKRYD<span class="text-[#40c4f5]">.</span></a>
        </div>
    </footer>
</template>