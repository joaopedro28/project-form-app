<template>
    <div class="container" 
    :style="`--font-color:  ${form_style.textColor ? form_style.textColor : 'currentColor'};
            --form-color: ${form_style.buttonColor ? form_style.buttonColor : 'currentColor'};
            --form-color-background: ${form_style.bgColor ? form_style.bgColor : 'currentColor'};`">
        
        <ProgressBar />
        <Forms class="forms"  :form="form" :id="id" />
        <SideNav />

    </div>
</template>

<script>
import Forms from '../components/Forms.vue';
import SideNav from '../components/SideNav.vue';
import ProgressBar from '../components/ProgressBar.vue';

export default {
    data() {
        return {
            form: {},
            id: 0,
            form_style: {}
        };
    },

    // Nesse asyncData ele esta esperando que seja selecionado um dos formularios, 
    // passando como um parametro na url o id pelo id, se não for passado nada ele pega o id 0;
    async asyncData({ query  , $axios }) {
        let id = query.id || 1;
        const response = await $axios(`/forms?id=${id}`);
        const form = response.data;  
        id = id !== null ? Number(id) : null;
        
        return {
            id,
            form: form[0],
            form_style: form[0].style
        };
    },
    components: { Forms }
}
</script>