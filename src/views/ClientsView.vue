<template>
    <BarState :titlePage="titlePage"/>
        <div class="container">
            <SearchBar v-on:search="setSearchTerm" class="" />
            <div class="row botonera">
              <div class="col-xs-12 col-md-2 col-lg-2">
                <button class="btn btn-outline-primary" @click="addClient">Add Client</button>
              </div>
            </div>
            <PopUpFormClients v-if="showModal" @close="showModal = false"/>
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
import PopUpFormClients from "@/components/PopUpClientsForm.vue"

const titlePage = "CLIENTS VIEW"

let clients = reactive([]);
let searchTerm = ref("");
let showModal = ref(false);
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

function addClient () {
  showModal.value = true;
  console.log("showModal: "+showModal.value);
}

function setSearchTerm(search) {
  searchTerm.value = search;
}

async function getListado() {

  const querySnapshotClients = await getDocs(collection(db, "clients"));
  querySnapshotClients.forEach((doc) => {
  clients.push(doc.data());
  });
}

</script>

<style scoped>
.botonera{
  margin-top: 10px;
  height: auto;
  background-color: aliceblue;
  border-radius: 5px;
}
</style>