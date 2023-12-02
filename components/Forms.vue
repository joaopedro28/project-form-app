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

                //Aqui a gente tem que mandar para a ultima questão/ pagina de sucesso Message.vue
                const fields = document.querySelectorAll('.field');
                fields.forEach((field) => {
                    if (field.classList.contains('-active')) {
                        field.classList.remove('-active');
                        field.classList.add('-prev');
                    }
                    if (field.classList.value == 'field') {
                        field.classList.add('-active');
                        this.$emit('next');
                    }
                });
                
                document.querySelector('.container').classList.add('message-final');
                document.querySelector('.progress-bar').style.display = 'none';
                document.querySelector('.nav-container').style.display = 'none';
                console.log('Resposta da solicitação POST:', response);
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