<template>
    <main :style="{ 'height': `${screenHeight}px` }">
        <Nuxt />
    </main>
</template>
<script>

export default {
    data() {
        return {
            screenHeight: window.innerHeight
        };
    },
    mounted() {
        window.addEventListener('resize', this.updateScreenHeight);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateScreenHeight);
    },
    methods: {
        updateScreenHeight() {
            this.screenHeight = window.innerHeight;
        }
    }
};
</script>