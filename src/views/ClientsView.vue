<template>
    <BarState :titlePage="titlePage"/>
        <div class="container">
            <SearchBar v-on:search="setSearchTerm" class="" />
            <ClientList :clientsList="itemListFiltered"/> 
        </div>
</template>

<script setup>
import { reactive, onMounted, ref, computed } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import BarState from '@/components/BarState.vue'
import ClientList from '@/components/ClientList.vue'
import SearchBar from "@/components/SearchBar.vue";


const titlePage = "CLIENTS VIEW"


let clients = reactive([]);
let searchTerm = ref("");

onMounted(() => {
getListado();
});

const itemListFiltered = computed(() => {
  if (!searchTerm.value) {
    return clients;
  } else if (searchTerm.value) {
    return clients.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.surname1.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.surname2.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.email.includes(searchTerm.value)
      );
    });
  }
  return clients;
});
function setSearchTerm(search) {
  searchTerm.value = search;
}

async function getListado() {

const querySnapshotClients = await getDocs(collection(db, "clients"));

querySnapshotClients.forEach((doc) => {
clients.push(doc.data());
});
//console.log(users)
//console.log(tickets)
//console.log(clients)
}

</script>

<style scoped>

</style>