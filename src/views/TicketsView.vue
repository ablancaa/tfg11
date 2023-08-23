<template>
    <BarState :titlePage="titlePage"/>
    
    <div class="container">
        <SearchBar v-on:search="setSearchTerm" class="" />
        <TicketList :ticketsList="itemListFiltered" :users="users"/> 
    </div>
</template>

<script setup>
import { reactive, onMounted , ref, computed  } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import BarState from '@/components/BarState.vue'
import TicketList from '@/components/TicketList.vue'
import SearchBar from "@/components/SearchBar.vue";
const titlePage = "TICKETS VIEW"

let tickets = reactive([]);
let users = reactive([]);
let searchTerm = ref("");
    onMounted(() => {
        getListado();
    });
    const itemListFiltered = computed(() => {
  if (!searchTerm.value) {
    return tickets;
  } else if (searchTerm.value) {
    return tickets.filter((item) => {
      return (
        item.idTicket.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.state.toLowerCase().includes(searchTerm.value.toLowerCase()) 
      );
    });
  }
  return tickets;
});
function setSearchTerm(search) {
  searchTerm.value = search;
}

async function getListado() {

const querySnapshotTickets = await getDocs(collection(db, "tickets"));
const querySnapshotUsers = await getDocs(collection(db, "users"));

querySnapshotTickets.forEach((doc) => {
tickets.push(doc.data());
});
querySnapshotUsers.forEach((doc) => {
users.push(doc.data());
});

//console.log(users)
//console.log(tickets)
//console.log(clients)
}

</script>

<style scoped>


</style>