<template>
  <div class="container">
   <div class="row">
      <div class="col-xs-12 col-md-4 col-lg-2 marginTop" v-for="user in props.usersList" :key="user.idUser">
          <CardUsers :user="user"/>
      </div>
  </div>
</div>
</template>

<script setup>

import { defineProps } from 'vue';
import CardUsers from './Cards/CardUsers.vue';

const props = defineProps({
  usersList: {
      type: Array,
    }
})
</script>

<style scoped>
.marginTop{
  margin-top: 0px;
}
</style>
  