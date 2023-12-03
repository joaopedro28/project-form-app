<template>
    <div class="final-message">
        <Icons :icon="'paper-plane'" />
        <h2 class="title-message">
            {{ field.title }}
        </h2>
        <p>{{ field.description }}</p>

        
        <div class="container-button">
            <h1>Hey</h1>
            <p>
                Venha conferir outros formulários disponiveis!
            </p>

            <div class="buttons">
                <nuxt-link class="button" to="/forms">TODOS OS FORMULÁRIOS</nuxt-link>
            </div>
        </div>

    </div>
</template>

<script>
import Icons from '../Icons.vue';

export default {
    props: {
        field: {
            type: Object
        }
    },
    components: { Icons }
    
}
</script>
