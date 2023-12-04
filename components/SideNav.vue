<template>
    <nav class="nav-container">
        <div class="formNav-comp">
            <div class="nav-button button-up" @click="prevQuestion">
                <Icons icon="up" />
            </div>
            <div class="nav-button button-down" @click="nextQuestion">
                <Icons icon="down" />
            </div>
        </div>
    </nav>
</template>

<script>
import Icons from './Icons.vue';
import { nextProgressBar, prevProgressBar } from '../utils/navigation_controller'

export default {
    components: { Icons },

    methods: {
        prevQuestion() {
            let questionActive = document.querySelector('.field.-active');
            let prevQuestion = questionActive.previousElementSibling;
            if (prevQuestion) {    
                questionActive.classList.remove('-active');
                prevQuestion.classList.remove('-prev');
                prevQuestion.classList.add('-active');
                prevProgressBar()
            }
        },
        nextQuestion() {
            let questionActive = document.querySelector('.field.-active');
            let nextQuestion = questionActive.nextElementSibling;

            let inputField = questionActive.querySelector('input');
            if (inputField && (inputField.value === '' )) {
                return;  
            }

            let dataSelected = questionActive.querySelector('.field-group');
            if (dataSelected && dataSelected.dataset.selected != 'true') {
                return;
            }

            if (nextQuestion) {   
                questionActive.classList.remove('-active');
                questionActive.classList.add('-prev');
                nextQuestion.classList.add('-active');
                nextProgressBar()
            }
        }
    },
}
</script>