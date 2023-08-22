<template>
    <div class="body">
       <div class="item"><h1>{{ props.titlePage }}</h1></div> 
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: normal;
    align-content: space-around;
    margin: 2px;
    background-color: rgb(174, 185, 250);
    height: 50px;
}
.item{
    
}
</style>