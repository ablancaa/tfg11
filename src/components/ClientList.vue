<template>
   <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-4" v-for="client in props.clientsList" :key="client.idClient">
          <CardProfile :client="client"/>
      </div>
  </div>
</template>

<script setup>

  import { defineProps } from 'vue';
import CardProfile from './Cards/CardProfile.vue';

const props = defineProps({
  clientsList: {
      type: Array,
    }
})
</script>

<style scoped>
.lista-material {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  }
</style>
  