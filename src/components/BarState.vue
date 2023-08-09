<template>
    <div class="body">
        <h1>{{ props.titlePage }}</h1>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    titlePage: {
        type: String,
    }
})
</script>

<style scoped>
.body {
    margin: 5px;
    background-color: rgb(233, 212, 252);
    height: 58px;
}
</style>