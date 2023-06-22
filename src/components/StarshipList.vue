<template>
    <div class="container">
        <div class="grid grid-cols-3">
            <div class="py-4" v-for="(item, i) in starships.results" :key="i">
                <div>{{ item.name }}</div>
            </div>
        </div>

        <div ref="scrollTrigger"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                starships: {
                    results: [],
                },
                nextPage: null,
                loading: false,
            };
        },
        mounted() {
            this.fetchStarships();
            this.setupScrollListener();
        },
        methods: {
            fetchStarships() {
                if (this.loading) return;
                this.loading = true;

                const url = this.nextPage || "https://swapi.dev/api/starships/";

                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        this.starships = {
                            results: [...this.starships.results, ...data.results],
                        };
                        this.nextPage = data.next;
                        this.loading = false;
                    })
                    .catch((error) => {
                        console.error(error);
                        this.loading = false;
                    });
            },
            setupScrollListener() {
                const scrollTrigger = this.$refs.scrollTrigger;

                const options = {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1.0,
                };

                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting && this.nextPage) {
                        this.fetchStarships();
                    }
                }, options);

                observer.observe(scrollTrigger);
            },
        },
    };
</script>
