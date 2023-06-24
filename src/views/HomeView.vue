<template>
    <div class="container">
        <div class="relative md:w-max mx-auto mb-6 sm:mb-10">
            <input v-model="keyword" type="text" placeholder="Find Starships..." class="bg-white/5 py-3 pl-4 pr-12 w-full md:w-[30rem] rounded-lg outline-none border border-white/5 transition-all hover:border-white/50 hover:bg-white/10 focus:border-white/80 focus:bg-white/10">

            <button type="submit" @click="searchStarships" class="absolute top-half right-4 -translate-y-half transition-all hover:drop-shadow-[0_0_.5em_white]">
                <SearchIcon iconClass="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        </div>
		<div v-if="countList === 0" class="text-center pt-10">
            <div class="w-28 h-28 bg-white/5 flex items-center justify-center rounded-full rotate-[45deg] mx-auto">
                <RocketIcon iconClass="w-20 h-20 text-white/50  -translate-y-[0.25rem]" />
            </div>
            <p class="mt-4 text-lg font-medium text-white/70">Starship not found.</p>
		</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
			<StarshipList 
				v-for="(item, index) in starships.results" 
				:key="index"
                :link="item.url.replace(/\D/g, '')"
				:name="item.name"
				:model="item.model"
				:manufacturer="item.manufacturer"
				:starship_class="item.starship_class"
				:length="item.length"
				:crew="item.crew"
				:passengers="item.passengers"
				:max_atmosphering_speed="item.max_atmosphering_speed"
				:cargo_capacity="item.cargo_capacity"
			/>

            <template v-if="loading">
                <SkeletonCarList v-for="index in 10" :key="index" />
            </template>
        </div>

        <div ref="scrollTrigger"></div>
    </div>
</template>

<script>
	import StarshipList from '@/components/StarshipList.vue';
    import SearchIcon from '../components/icons/SearchIcon.vue';
    import RocketIcon from '../components/icons/RocketIcon.vue';
    import SkeletonCarList from '../components/SkeletonCarList.vue';

    export default {
    data() {
        return {
            starships: {
                results: [],
            },
			countList: 0,
            nextPage: null,
            loading: false,
            keyword: '',
        };
    },
    mounted() {
        this.fetchStarships();
        this.setupScrollListener();
    },
    methods: {
        fetchStarships() {
            if (this.loading)
                return;
			this.countList = null;
            this.loading = true;
            const url = this.nextPage || `${import.meta.env.VITE_STARSHIP_API_URL}?search=${encodeURIComponent(this.keyword)}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    this.starships = {
                        results: [...this.starships.results, ...data.results],
                    };
                    this.countList = data.count;
                    this.nextPage = data.next;
                    this.loading = false;
                })
                    .catch((error) => {
                    console.error(error);
                    this.loading = false;
                });
        },
        searchStarships() {
            if (this.loading)
                return;
			this.countList = null;
            this.loading = true;
			this.starships.results = [];
            const searchUrl = `${import.meta.env.VITE_STARSHIP_API_URL}?search=${encodeURIComponent(this.keyword)}`;
            fetch(searchUrl)
                .then((response) => response.json())
                .then((data) => {
                    this.starships = {
                        results: data.results,
                    };
					this.countList = data.count;
                    this.nextPage = null;
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
                threshold: 1,
            };
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && this.nextPage) {
                    this.fetchStarships();
                }
            }, options);
            observer.observe(scrollTrigger);
        },
    },
    components: { StarshipList, SearchIcon, SkeletonCarList, RocketIcon }
};
</script>
