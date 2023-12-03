<template>
    <div class="field-box">
        <label :for="field.id">{{ field.title }}</label>
        <p class="description"> {{ field.description }}</p>
        <input :id="'input-' + field.id" autocomplete="off" :class="isInvalid ? 'invalid' : ''" :type="field.type" value=""
            v-model="inputValue" required :placeholder="placeholder">
        <div v-if="validationError" class="error-message">{{ validationError }}</div>
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
        submitForm() {
            this.$emit('next');
            this.$parent.getInfo(this.inputValue, this.$parent.$el.id, this.field.id)
        },
        sendForm() {
            this.performValidation(() => {
                if (!this.isInvalid) {
                    this.$nuxt.$emit('send-form');
                }
            });
        },
        performValidation(callback) {
            const { validationError, isInvalid } = validate(this.inputValue, this.validationError, this.field.type, this.isInvalid);
            this.validationError = validationError;
            this.isInvalid = isInvalid;
            console.log(this.isInvalid, this.validationError)
            if (!this.isInvalid && callback && typeof callback === 'function') {
                callback();
            }
        },
    },
}
</script>