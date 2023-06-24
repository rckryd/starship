<template>
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.47212 1.18772C6.79313 0.465468 7.50937 0 8.29975 0H61.7003C62.4906 0 63.2069 0.465467 63.5279 1.18772L69.7501 15.1877C70.3379 16.5103 69.3698 18 67.9225 18H2.07752C0.630207 18 -0.33791 16.5103 0.249901 15.1877L6.47212 1.18772Z" fill="currentColor" :class="iconClass"/>
    </svg>
</template>

<script>
    export default {
        props: {
            width: {
                default: 70
            },
            height: {
                default: 18
            },
            iconClass: {
                default: ''
            }
        }
    }
</script>
