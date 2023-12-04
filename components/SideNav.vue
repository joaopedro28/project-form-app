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
import { isValidEmail } from '../utils/validate';
import { updateArrowVisibility } from '../utils/navigation_controller'

export default {
    components: { Icons },

    mounted() {
        updateArrowVisibility();
    },
    methods: {
        prevQuestion() {
            let questionActive = document.querySelector('.field.-active');
            let prevQuestion = questionActive.previousElementSibling;
            if (prevQuestion) {
                questionActive.classList.remove('-active');
                prevQuestion.classList.remove('-prev');
                prevQuestion.classList.add('-active');
                prevProgressBar()
                updateArrowVisibility();
            }
        },
        nextQuestion() {
            let questionActive = document.querySelector('.field.-active');
            let nextQuestion = questionActive.nextElementSibling;

            questionActive.querySelector('button')?.click();
            let inputField = questionActive.querySelector('input');

            if (inputField) {
                if (inputField.value === '') {
                    return;
                }
                if (inputField.type == 'email' && (!isValidEmail(inputField.value))) {
                    return;
                }
            }

            let dataSelected = questionActive.querySelector('.field-group');
            if (dataSelected && dataSelected.dataset.selected != 'true') {
                return;
            }

            if (nextQuestion) {
                questionActive.classList.remove('-active');
                questionActive.classList.add('-prev');
                nextQuestion.classList.add('-active');
                updateArrowVisibility();
            }
        },
    },
}
</script>