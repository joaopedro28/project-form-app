<template>
    <div class="field-box">
        <label :for="field.id">{{ field.title }}</label>
        <p class="description"> {{ field.description }}</p>

        <div class="field-group">
            <p class="field-tip">
                Selecione quantos itens desejar.
            </p>
            <div class="option" v-for="(option, index) in field.options" :key="option.id"
                @click="selectOption(option, $event.target)">
                <span class="letter">{{ String.fromCharCode(65 + index) }}</span>
                {{ option.value }}
            </div>
        </div>

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
            optionsSelected: [],
        }
    },
    methods: {
        submitForm() {
            console.log(this.inputValue, this.$parent.$el.id, 'filho checkbox');
            this.$parent.receberInfo(this.inputValue, this.$parent.$el.id)
        },
        selectOption(selectedOption, el) {
            el.classList.toggle('selected')
            if (this.optionsSelected.includes(selectedOption)) {
                this.optionsSelected.splice(this.optionsSelected.indexOf(selectedOption), 1)
            } else {
                this.optionsSelected.push(selectedOption)
            }
            this.$parent.receberInfo(this.optionsSelected, this.$parent.$el.id, this.field.id)
        },
        sendForm() {
            this.$nuxt.$emit('send-form');
        }
    },
}
</script>