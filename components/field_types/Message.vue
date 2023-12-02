<template>
    <div class="final-message">
        <Icons :icon="'paper-plane'" />
        <h2 class="title-message">
            {{ field.title }}
        </h2>
        <p>{{ field.description }}</p>
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