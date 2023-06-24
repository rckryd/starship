<template>
    <div class="container">
        <ul class="flex mb-10">
            <li>
                <router-link to="/" class="font-medium transition-all hover:drop-shadow-[0_0_.5em_white]">Home</router-link>
            </li>
            <li class="flex items-center">
                <span class="mx-2">/</span>
                <template v-if="loading">
                    <div class="py-1 h-5 sm:h-6 translate-y-[.125rem]">
                        <div class="h-full w-[12rem] animate-pulse rounded-lg bg-white/20"></div>
                    </div>
                </template>
                <span v-else>{{ starship.name }}</span>
            </li>
        </ul>
        <template v-if="loading">
            <div class="animate-pulse pt-8 pb-4 px-4 bg-white/10" v-for="index in 10" :key="index">
                
            </div>
        </template>
        <div v-else>
            <h2>{{ starship.name }}</h2>
            <p><strong>Model:</strong> {{ starship.model }}</p>
            <p><strong>Manufacturer:</strong> {{ starship.manufacturer }}</p>
            <p><strong>Starship Class:</strong> {{ starship.starship_class }}</p>
            <p><strong>Length:</strong> {{ starship.length }}</p>
            <p><strong>Crew:</strong> {{ starship.crew }}</p>
            <p><strong>Passengers:</strong> {{ starship.passengers }}</p>
            <p><strong>Max Atmosphering Speed:</strong> {{ starship.max_atmosphering_speed }}</p>
            <p><strong>Cargo Capacity:</strong> {{ starship.cargo_capacity }}</p>
        </div>
    </div>
</template>

<script>
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
                            this.$router.push('/404');
                        } else {
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
    };
</script>