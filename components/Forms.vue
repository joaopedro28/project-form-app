<template>
    <div>
        <div class="fields" v-if="id != null">
            <Field v-for="(field, index) in form.fields" :key="field.id" :field="field" :index="index" @next="next"
                :isLast="index === form.fields.length - 2 ? { isLast: true, sendButton: form.fields[form.fields.length - 1] } : null" />
        </div>
    </div>
</template>

<script>
import Field from './Field.vue';

export default {
    props: {
        form: {
            type: Object,
        },
        id: {
            type: Number || null
        }
    },
    data() {
        return {
            dataForm: []
        }
    },
    components: { Field },
    methods: {
        formContent(formItems) {
            let itemForm = {
                formId: this.id,
                fieldId: formItems.fieldId,
                value: formItems.value
            }
            const index = this.dataForm.findIndex(item => item.fieldId === itemForm.fieldId);

            if (index !== -1) {
                this.dataForm.splice(index, 1, itemForm);
            }
            else {
                this.dataForm.push(itemForm);
            }
        },
        next() {
            this.$emit('next')
        },
        async sendForm(formItems) {
            const jsonData = this.dataForm;

            try {
                const response = await this.$axios.post('/respondents/', jsonData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                console.log('Resposta da solicitação POST:', response.data);
            } catch (error) {
                console.error('Erro ao realizar a solicitação POST:', error);
            }
        }

    },

    mounted: function () {
        this.$nuxt.$on('send-form', this.sendForm);
    }
}
</script>