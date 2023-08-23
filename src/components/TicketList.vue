<template>
   <div class="col-xs-12 col-md-12 col-lg-12">
      <div v-for="ticket in props.ticketsList" :key="ticket.id">
          <Ticket :ticket="ticket" :users="props.users" />
      </div>
  </div>
</template>

<script setup>
  import Ticket from '@/components/Ticket.vue'
  import { defineProps } from 'vue';

const props = defineProps({
    ticketsList: {
      type: Array,
    },
    users: {
      type: Array,
    }
})
</script>

<style scoped>
.lista-material {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr;
      /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  }
</style>
  