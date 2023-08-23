<template>
  <div class="container">
   <div class="row">
      <div class="col-6 col-md-4 col-lg-3 marginTop" v-for="user in props.usersList" :key="user.idUser">
      <div v-for="ticket in props.ticketList" :key="ticket.idTicket">
      </div>
          <CardUsers :user="user" :ticket="ticketList"/>
      
      </div>
  </div>
</div>
</template>

<script setup>

import { defineProps } from 'vue';
import CardUsers from './Cards/CardUsers.vue';
let props = defineProps({
  usersList: {
      type: Array,
    },
  ticketList: {
      type: Array,
    }
})

//console.log(props.ticketList)
</script>

<style scoped>
.marginTop{
  margin-top: 0px;
}
</style>
  