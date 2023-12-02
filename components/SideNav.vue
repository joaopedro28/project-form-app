<template>
    <nav class="nav-container">
        <div class="formNav-comp">
            <div class="nav-button button-up" @click="prevQuestion">
                <NavButton arrow="up" />
            </div>
            <div class="nav-button button-down" @click="nextQuestion">
                <NavButton arrow="down" />
            </div>
        </div>
    </nav>
</template>
<script>
import NavButton from './NavButton.vue';

export default {
    components: { NavButton },

    methods: {
        prevQuestion() {
            let questionActive = document.querySelector('.field.-active');
            let prevQuestion = questionActive.previousElementSibling;
            if (prevQuestion) {    
                questionActive.classList.remove('-active');
                prevQuestion.classList.remove('-prev');
                prevQuestion.classList.add('-active');
                this.$parent.prev()
            }
        },
        nextQuestion() {
            let questionActive = document.querySelector('.field.-active');
            let nextQuestion = questionActive.nextElementSibling;
            if (nextQuestion) {   
                questionActive.classList.remove('-active');
                questionActive.classList.add('-prev');
                nextQuestion.classList.add('-active');
                this.$parent.next()
            }
        }
    },
}
</script>