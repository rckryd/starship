<template>
    <router-link :to="`/starship/${link}`" class="relative pt-4 pb-10 px-4 bg-white/5 border border-white/5 rounded-lg transition-all hover:bg-white/10 hover:border-white/50 group">
        <div class="flex gap-2 items-center">
            <RocketIcon iconClass="w-8 h-8 sm:w-10 sm:h-10" />
            <div class="flex-1">
                <div class="text-xl sm:text-2xl font-medium line-clamp-1" :title="name">{{ name }}</div>
                <div class="opacity-60 text-sm line-clamp-1">{{ model }}</div>
            </div>
        </div>
        <div class="grid gap-4 mt-8">
            <div> 
                <div class="text-xs opacity-60">Manufacturer</div>
                <div class="line-clamp-1">{{ manufacturer }}</div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div> 
                    <div class="text-xs opacity-60">Crew</div>
                    <div class="line-clamp-1">{{ crew }}</div>
                </div>
                <div> 
                    <div class="text-xs opacity-60">Passengers</div>
                    <div class="line-clamp-1">{{ passengers }}</div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-half -translate-x-half">
            <CardOrnamentIcon height="12" width="72" iconClass="fill-white/5 transition-all group-hover:fill-white/50" />
        </div>
    </router-link>
</template>

<script>
    import RocketIcon from '@/components/icons/RocketIcon.vue';
    import CardOrnamentIcon from './icons/CardOrnamentIcon.vue';

    export default {
        props: {
            name,
            model: {
                type: String,
            },
            manufacturer: {
                type: String,
            },
            starship_class: {
                type: String,
            },
            length: {
                type: String,
            },
            passengers: {
                type: String,
            },
            crew: {
                type: String,
            },
            max_atmosphering_speed: {
                type: String,
            },
            cargo_capacity: {
                type: String,
            },
            link: {
                type: String,
            },
        },
        components: { RocketIcon, CardOrnamentIcon }
    };
</script>
