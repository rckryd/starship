<script setup>
import CardOrnamentIcon from '@/components/icons/CardOrnamentIcon.vue';
</script>

<template>
    <div class="animate-pulse relative pt-4 pb-10 px-4 bg-white/5 border border-white/5 rounded-lg">
        <div class="flex gap-2 items-center">
            <div class="animate-pulse w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20"></div>
            <div class="flex-1">
                <div class="py-1 h-7 sm:h-8">
                    <div class="h-full w-full animate-pulse rounded-lg bg-white/20"></div>
                </div>
                <div class="py-1 h-5">
                    <div class="h-full w-half animate-pulse rounded-lg bg-white/20"></div>
                </div>
            </div>
        </div>
        <div class="grid gap-4 mt-8">
            <div> 
                <div class="py-1 h-4">
                    <div class="h-full w-[25%] animate-pulse rounded-lg bg-white/20"></div>
                </div>
                <div class="py-1 h-5 sm:h-6">
                    <div class="h-full w-half animate-pulse rounded-lg bg-white/20"></div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div> 
                    <div class="py-1 h-4">
                        <div class="h-full w-half animate-pulse rounded-lg bg-white/20"></div>
                    </div>
                    <div class="py-1 h-5 sm:h-6">
                        <div class="h-full w-full animate-pulse rounded-lg bg-white/20"></div>
                    </div>
                </div>
                <div> 
                    <div class="py-1 h-4">
                        <div class="h-full w-half animate-pulse rounded-lg bg-white/20"></div>
                    </div>
                    <div class="py-1 h-5 sm:h-6">
                        <div class="h-full w-full animate-pulse rounded-lg bg-white/20"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-half -translate-x-half">
            <CardOrnamentIcon height="12" width="72" iconClass="fill-white/5" />
        </div>
    </div>
</template>