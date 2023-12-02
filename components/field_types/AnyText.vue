<template>
    <div class="field-box">
        <label :for="field.id">{{ field.title }}</label>
        <p class="description"> {{ field.description }}</p>
        <input :type="field.type" value="" v-model="inputValue" required :id="field.id" :placeholder="placeholder">
        <button v-if="!isLast" @click="submitForm" type="button" :id="'button-' + field.id">Responder</button>
        <button v-if="isLast" type="button"  @click="sendForm()">Enviar respostas</button>
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
        }
    },
    data() {
        return {
            inputValue: null,
        };
    },

    methods: {
        submitForm() {
            console.log(this.inputValue, this.$parent.$el.id, 'filho checkbox');
            this.$emit('next');
            this.$parent.receberInfo(this.inputValue, this.$parent.$el.id, this.field.id)
        },
        sendForm() {
            this.$nuxt.$emit('send-form');
        }
    },
}
</script>