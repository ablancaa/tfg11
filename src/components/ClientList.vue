<template>
   <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-4" v-for="client in props.clientsList" :key="client.idClient">
          <CardClients :client="client" @deleteClientId="deleteClientId"/>
      </div>
  </div>
</template>

<script setup>

  import { defineProps, defineEmits } from 'vue';
import CardClients from './Cards/CardClients.vue';

const props = defineProps({
  clientsList: {
      type: Array,
    },
})
const emit = defineEmits(['deleteClientId'])

const deleteClientId = (id) =>{
    emit('deleteClientId',id);
    //console.log("Delete List: "+id)
}
</script>

<style scoped>

</style>
  