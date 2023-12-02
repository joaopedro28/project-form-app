<template>
    <div class="field-box">
        <label :for="field.id">{{ field.title }}</label>
        <p class="description"> {{ field.description }}</p>
        <input :id="'input-' + field.id" autocomplete="off" :class="isInvalid ? 'invalid' : ''" :type="field.type" value="" v-model="inputValue"
            required :placeholder="placeholder">
        <div v-if="validationError" class="error-message">{{ validationError }}</div>
        <button v-if="!isLast" @click="validateAndSubmit" type="button" :id="'button-' + field.id">Responder</button>
        <button v-if="isLast" type="button" @click="sendForm()">Enviar respostas</button>
    </div>
</template>

<script>
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

    mounted() {
    },
    methods: {
        submitForm() {
            this.$emit('next');
            this.$parent.getInfo(this.inputValue, this.$parent.$el.id, this.field.id)
        },

        isValidEmail(email) {
            // Utilizando uma expressão regular (regex) para validar o formato do e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        validateAndSubmit() {
            this.validationError = null; 
            if (this.field.type === 'email') {
                if (!this.inputValue) {
                    this.validationError = 'Essa resposta é obrigatória';
                    this.scheduleErrorClear();
                    this.isInvalid = true;
                    return;
                }
                if (!this.isValidEmail(this.inputValue)) {
                    this.validationError = 'Informe um E-mail válido';
                    this.scheduleErrorClear();
                    this.isInvalid = true;
                    return;
                }
            }
            else if (this.field.type === 'text') {
                if (!this.inputValue) {
                    this.validationError = 'Essa resposta é obrigatória';
                    this.scheduleErrorClear();
                    this.isInvalid = true;
                    return;
                }
            }

            this.submitForm();
        },
        scheduleErrorClear() {
            setTimeout(() => {
                this.validationError = null;
                this.isInvalid = false;
            }, 6000);
        },
        sendForm() {
            this.validateAndSubmit();
            this.$nuxt.$emit('send-form');
        }
    },
}
</script>