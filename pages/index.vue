<template>
    <div class="container">
        <Forms class="forms" :form="form" :id="id" />
    </div>
</template>

<script>
import Forms from '../components/Forms.vue';

export default {
    data() {
        return {
            form: {},
            id: 0
        };
    },
    mounted() {
    },
    // Nesse asyncData ele esta esperando que seja selecionado um dos formularios, 
    // passando como um parametro na url o id pelo id, se não for passado nada ele pega o id 0;
    async asyncData({ query }) {
        let id = query.id || 1;
        const response = await fetch(`https://65665153eb8bb4b70ef3297d.mockapi.io/api/forms?id=${id}`);
        const form = await response.json();
        id = id !== null ? Number(id) : null;
        return {
            id,
            form: form[0],
        };
    },
    components: { Forms }
}
</script>