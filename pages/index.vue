<template>
    <div class="container">
        
        <ProgressBar />
        <Forms class="forms" @next="next" :form="form" :id="id" />
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
        };
    },
    mounted() {
    },
    methods: {
        next() {
            const progressBars = document.querySelectorAll('.progress');
            for (let i = 0; i < progressBars.length; i++) {
                if (!progressBars[i].classList.contains('-active')) {
                    progressBars[i].classList.add('-active');
                    break;
                }
            }
        },
        prev() {
            console.log('clicou no botão prev' )
            const progressBars = document.querySelectorAll('.progress');
            for (let i = progressBars.length - 1; i >= 0; i--) {
                if (progressBars[i].classList.contains('-active')) {
                    progressBars[i].classList.remove('-active');
                    break;
                }
            }
        }
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