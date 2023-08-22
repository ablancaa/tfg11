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
    align-items: center;
    align-content: space-around;
    margin: 2px;
    background-color:rgb(207, 223, 252);
    height: 40px;
    box-shadow: 0 3px 6px rgba(0, 21, 255, 0.345), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-bottom: 10px;
}
.item{
    margin-top: 6px;
}
</style>