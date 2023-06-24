<template>
    <div class="container">
        <ul class="flex mb-10">
            <li>
                <template v-if="loading">
                    <div class="py-1 h-5 sm:h-6 translate-y-[.125rem]">
                        <div class="h-full w-12 animate-pulse rounded-lg bg-white/20"></div>
                    </div>
                </template>
                <router-link v-else to="/" class="font-medium transition-all hover:drop-shadow-[0_0_.5em_white]">Home</router-link>
            </li>
            <li class="flex items-center">
                
                <template v-if="loading">
                    <div class="ml-4 py-1 h-5 sm:h-6 translate-y-[.125rem]">
                        <div class="h-full w-[12rem] animate-pulse rounded-lg bg-white/20"></div>
                    </div>
                </template>
                <template v-else>
                    <span class="mx-2">/</span>
                    <span>{{ starship.name }}</span>
                </template>
            </li>
        </ul>
        <template v-if="loading">
            <div class="animate-pulse pt-8 pb-4 px-4 bg-white/10 rounded-lg h-[calc(100vh_-_22rem)]">
                
            </div>
        </template>
        <template v-else>
            <h1 class="uppercase font-medium text-3xl md:text-4xl lg:text-6xl">{{ starship.name }}</h1>
            <p class="text-base md:text-xl text-white/60 mt-1 md:mt-2">{{ starship.model }} by {{ starship.manufacturer }}</p>

            <div class="relative mx-auto my-8 md:my-10 md:w-max">
                <RocketIcon iconClass="h-[75%] w-[75%] md:h-[calc(100vh_-_35rem)] md:w-[calc(100vh_-_35rem)] mx-auto border-r" />
                <div class="bg-black absolute top-half right-0 md:-translate-y-half">
                    <span class="inline-block md:translate-x-half font-medium text-base md:text-xl">
                        {{ starship.length }} m
                    </span>
                </div>
            </div>

            <div class="flex gap-4 justify-between flex-col md:flex-row">
                <div> 
                    <div class="opacity-60">Crew</div>
                    <div class="text-base md:text-2xl font-medium line-clamp-1">{{ starship.crew }}</div>
                </div>
                <div> 
                    <div class="opacity-60">Passengers</div>
                    <div class="text-base md:text-2xl font-medium line-clamp-1">{{ starship.passengers }}</div>
                </div>
                <div> 
                    <div class="opacity-60">Class</div>
                    <div class="text-base md:text-2xl font-medium line-clamp-1">{{ starship.starship_class }}</div>
                </div>
                <div> 
                    <div class="opacity-60">Max. Speed</div>
                    <div class="text-base md:text-2xl font-medium line-clamp-1">{{ starship.max_atmosphering_speed }}</div>
                </div>
                <div> 
                    <div class="opacity-60">Capacity</div>
                    <div class="text-base md:text-2xl font-medium line-clamp-1">{{ starship.cargo_capacity }}</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import RocketIcon from '@/components/icons/RocketIcon.vue';

    export default {
    data() {
        return {
            starship: {},
            loading: false,
        };
    },
    mounted() {
        const starshipId = this.$route.params.id;
        this.fetchStarship(starshipId);
    },
    methods: {
        fetchStarship(starshipId) {
            if (this.loading)
                return;
            this.loading = true;
            const url = `${import.meta.env.VITE_STARSHIP_API_URL}${starshipId}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                if (data.detail === "Not found") {
                    this.$router.push("/404");
                }
                else {
                    this.starship = data;
                    this.loading = false;
                }
            })
                .catch((error) => {
                console.error(error);
                this.loading = false;
            });
        },
    },
    components: { RocketIcon }
};
</script>