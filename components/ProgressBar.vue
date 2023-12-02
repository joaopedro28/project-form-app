<template>
    <div class="progress-bar">
        <span 
            class="progress" 
            v-for="i in progresBarSize" 
            :key="i" 
            :style="'--width:' + widthBar + '%'"
            :class="i === 1 ? '-active' : ''"
        >
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progresBarSize: 0,
            widthBar: 0,
        }
    },
    methods: {
        getQuantityQuestions() {
            let fields = document.querySelectorAll('.field');
            let questionsSize = fields.length;

            this.widthBar = 100 / questionsSize;
            this.progresBarSize = questionsSize;
        },
    },
    mounted: function () {
        this.getQuantityQuestions();
    }
}
</script>