<template>
    <div class="field-box">
        <label :for="field.id">{{ field.title }}</label>
        <p class="description"> {{ field.description }}</p>

        <div class="field-group" :data-selected="isSelected">
            <p class="field-tip">
                <Icons icon="checkbox" />
                Selecione quantos itens desejar.
            </p>
            <div class="option" v-for="(option, index) in field.options" :key="option.id"
                @click="selectOption(option, $event.target, isLast ? true : false)" :data-value="optionsSelected">
                <span class="letter">{{ String.fromCharCode(65 + index) }}</span>
                {{ option.value }}
            </div>
        </div>

        <div v-if="validationError" class="error-message">{{ validationError }}</div>

        <button v-if="!isLast" @click="validateAndSubmit" type="button" :id="'button-' + field.id">Responder</button>
        <button v-if="isLast" type="button" @click="sendForm()">
            <Icons icon="check" />
            Enviar respostas
        </button>
    </div>
</template>

<script>
import { validate } from '../../utils/utlis.js';

export default {
    props: {
        field: {
            type: Object
        },
        placeholder: {
            type: String,
            default: 'Sua resposta...'
        },
        isLast: {
            type: Object
        }
    },
    data() {
        return {
            optionsSelected: [],
            validationError: null,
            isSelected: 'false',
        }
    },
    methods: {
        submitForm() {
            this.$parent.getInfo(this.inputValue, this.$parent.$el.id)
        },
        selectOption(selectedOption, el, final_question = false) {
            el.classList.toggle('selected');
            if (this.optionsSelected.includes(selectedOption)) {
                this.optionsSelected.splice(this.optionsSelected.indexOf(selectedOption), 1)
                if (this.optionsSelected.length === 0) {
                    this.isSelected = 'false';
                }
            } else {
                this.optionsSelected.push(selectedOption)
                this.isSelected = 'true';
            }

            this.$parent.getInfo(this.optionsSelected, this.$parent.$el.id, this.field.id, final_question)
        },

        validateAndSubmit() {
            this.performValidation(() => {
                if (this.isSelected) {
                    this.submitForm();
                }
            });
        },
        sendForm() {
            this.performValidation(() => {
                if (!this.isSelected) {
                    this.$nuxt.$emit('send-form');
                }
            });
        },
        performValidation(callback) {
            const { validationError, isInvalid } = validate(this.optionsSelected, this.validationError, this.field.type, this.isSelected);
            this.validationError = validationError;
            this.isSelected = isInvalid;

            if (!this.isSelected && callback && typeof callback === 'function') {
                callback();
            }
        },
    },
}
</script>