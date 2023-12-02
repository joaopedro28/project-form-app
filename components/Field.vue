<template>
    <div class="field" :class="index == 0 ? '-active' : ''" v-if="field.type == 'text' || field.type == 'email'" :id="index">
        <AnyText :field="field" :isLast="isLast" @next="next" />
    </div>
    <div class="field" v-else-if="field.type === 'checkbox'" :id="index">
        <Checkbox :field="field" :isLast="isLast" />
    </div>

</template>
<script>
import AnyText from './field_types/AnyText.vue';
import Checkbox from './field_types/Checkbox.vue';

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
    
    components: { AnyText, Checkbox },
    
    methods: {
        receberInfo(value, id_parent, field_id) {
            this.formItems = {
                fieldId: field_id,
                value: value
            }
            this.$parent.formContent(this.formItems)
            this.nextQuestion(id_parent)
        },
        nextQuestion(id) {
            let fieldBlock = document.getElementById(id);
            let nextFieldBlock = fieldBlock.nextElementSibling;
            if (nextFieldBlock) {   
                fieldBlock.classList.remove('-active')
                fieldBlock.classList.add('-prev')
                
                nextFieldBlock.classList.add('-active')
            }
        },
        next() {
            this.$emit('next')
        }
    }
}
</script>