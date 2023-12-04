<template>
    <div class="field-box">
        <label :for="field.id">{{ field.title }}</label>
        <p class="description"> {{ field.description }}</p>

        <div :id="'checkbox-' + field.id" class="field-group" :data-selected="isSelected">
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

        <div :class="'error-message ' + (isInvalid ? 'active' : '')">
            <span>{{ validationError }}</span>
        </div>

        <button v-if="!isLast" @click="validateAndSubmit" type="button" :id="'button-' + field.id">Responder</button>
        <button v-if="isLast" type="button" @click="sendForm()">
            <Icons icon="check" />
            Enviar respostas
        </button>
    </div>
</template>

<script>
import { validate } from '../../utils/utlis.js';
import { nextProgressBar } from '../../utils/navigation_controller.js';

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
            isInvalid: false,
            isSelected: 'false',
        }
    },
    methods: {
        submitForm(isLast) {
            nextProgressBar()
            this.$parent.getInfo(this.optionsSelected, this.$parent.$el.id, this.field.id, isLast)
        },
        selectOption(selectedOption, el, final_question = false) {
            el.classList.toggle('selected');
            if (this.optionsSelected.includes(selectedOption)) {
                this.optionsSelected.splice(this.optionsSelected.indexOf(selectedOption), 1)
                if (this.optionsSelected.length === 0) {
                    this.isSelected = 'false';
                    this.isInvalid = false;
                }
            } else {
                this.optionsSelected.push(selectedOption)
                this.isSelected = 'true';
                this.isInvalid = true;
            }

            this.$parent.getInfo(this.optionsSelected, this.$parent.$el.id, this.field.id, final_question)
        },

        validateAndSubmit() {
            this.performValidation(() => {
                if (!this.isInvalid) {
                    this.submitForm();
                }
            });
        },
        sendForm() {
            this.performValidation(() => {
                if (!this.isInvalid) {
                    this.submitForm(true);
                    // this.$nuxt.$emit('send-form');
                }
            });
        },
        performValidation(callback) {
            const { validationError, isInvalid } = validate(this.optionsSelected, this.validationError, this.field.type, this.isInvalid, 'checkbox-' + this.field.id);
            this.validationError = validationError;
            this.isInvalid = isInvalid;

            if (!this.isInvalid && callback && typeof callback === 'function') {
                callback();
            }
        },
    },
}
</script>