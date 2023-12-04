<template>
    <div class="field-box">
        <label :for="field.id">{{ field.title }}</label>
        <p class="description"> {{ field.description }}</p>
        <input :id="'input-' + field.id" autocomplete="off" :class="isInvalid ? 'invalid' : ''" :type="field.type" value=""
            v-model="inputValue" required :placeholder="placeholder">
        <div :class="'error-message ' + (isInvalid ? 'active' : '')">
            <span>{{ validationError }}</span>
        </div>
        <button v-if="!isLast" @click="validateAndSubmit()" type="button" :id="'button-' + field.id">Responder</button>
        <button v-if="isLast" type="button" @click="sendForm()">
            <Icons icon="check" />
            Enviar respostas
        </button>
    </div>
</template>

<script>
import Icons from '../Icons.vue';
import { validate } from '../../utils/utlis.js';
import { nextProgressBar } from '../../utils/navigation_controller.js';

export default {
    props: {
        field: {
            type: Object
        },
        placeholder: {
            type: String
        },
        isLast: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    data() {
        return {
            inputValue: null,
            validationError: null,
            isInvalid: false
        };
    },
    components: {
        Icons
    },
    methods: {
        validateAndSubmit() {
            this.performValidation(() => {
                if (!this.isInvalid) {
                    this.submitForm();
                }
            });
        },
        submitForm(isLast) {
            nextProgressBar()
            this.$parent.getInfo(this.inputValue, this.$parent.$el.id, this.field.id)
        },
        sendForm() {
            this.performValidation(() => {
                if (!this.isInvalid) {
                    this.submitForm(true);
                    this.$nuxt.$emit('send-form');
                }
            });
        },
        performValidation(callback) {
            const { validationError, isInvalid } = validate(this.inputValue, this.validationError, this.field.type, this.isInvalid, 'input-' + this.field.id);
            this.validationError = validationError;
            this.isInvalid = isInvalid;

            if (!this.isInvalid && callback && typeof callback === 'function') {
                callback();
            }
        },
    },
}
</script>