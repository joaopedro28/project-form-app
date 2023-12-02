<template>
    <div class="field" :class="index == 0 ? '-active' : ''" v-if="field.type == 'text' || field.type == 'email'"
        :id="index">
        <AnyText :field="field" :isLast="isLast" @next="next" :index="index" />
    </div>
    <div class="field" :class="index == 0 ? '-active' : ''" v-else-if="field.type === 'checkbox'" :id="index">
        <Checkbox :field="field" :isLast="isLast" />
    </div>
    <div class="field" v-else :id="index">
        <Message :field="field" />
    </div>
</template>
<script>
import AnyText from './field_types/AnyText.vue';
import Checkbox from './field_types/Checkbox.vue';
import Message from './field_types/Message.vue';

export default {
    props: {
        field: {
            type: Object
        },
        index: {
            type: Number
        },
        isLast: {
            type: Object
        }
    },
    data: function () {
        return {
            formItems: {}
        }
    },

    components: { AnyText, Checkbox, Message },

    mounted() {
        if (this.index == 0) {
            this.setInputFocus(this.index);
        }
    },

    methods: {
        getInfo(value, id_parent, field_id, final_question = false) {
            this.formItems = {
                fieldId: field_id,
                value: value
            }
            this.$parent.formContent(this.formItems)
            if (!final_question) {
                this.nextQuestion(id_parent, field_id)
            }
        },
        nextQuestion(id, field_id) {
            let fieldBlock = document.getElementById(id);
            let nextFieldBlock = fieldBlock.nextElementSibling;
            if (nextFieldBlock) {
                fieldBlock.classList.remove('-active')
                fieldBlock.classList.add('-prev')

                nextFieldBlock.classList.add('-active')
                this.setInputFocus(null, field_id)
            }
        },
        next() {
            this.$emit('next')
        },
        setInputFocus(index, field_id) {
            if (index == 0 && document.getElementById('input-' + this.field.id)) {
                document.getElementById('input-' + this.field.id).focus();
            } else if (document.getElementById('input-' + field_id)) {
                document.getElementById('input-' + field_id).focus();
            }
        }
    }
}
</script>