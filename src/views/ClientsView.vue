<template>
    <BarState :titlePage="titlePage"/>
        <div class="container">
            <SearchBar v-on:search="setSearchTerm" class="" />
            <div class="row botonera">
              <div class="col-xs-12 col-md-2 col-lg-2">
                <button class="btn btn-outline-primary" @click="showForm">Add Client</button>
           
              </div>
            </div>
            <PopUpFormClients v-if="showModal" @close="showModal = false" @newUser="addUser"/>
            <ClientList :clientsList="itemListFiltered" @deleteClient="deleteClient"/>
  
        </div>
</template>

<script setup>
import { reactive, onMounted, ref, computed } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
//import { uuid } from 'vue-uuid';
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

function showForm () {
  showModal.value = true;
  console.log("showModal: "+showModal.value);
}

async function addUser(newUser){
  console.log(newUser);
  try {
  const docRef = await addDoc(collection(db, "clients"), {
    idClient: newUser.idClient,
    name: newUser.name,
    surname1: newUser.surname1,
    surname2: newUser.surname2,
    state: newUser.state,
    imgClient: newUser.avatar,
    email: newUser.email,
    phones: {
      mobile: newUser.phones.mobile,
      landline: newUser.phones.landline,
    }
  });
  console.log("Document written with ID: ", docRef.id);
  console.log(newUser)
} catch (e) {
  console.error("Error adding document: ", e);
}
location.reload();
}

async function deleteClient(id) {
  console.log("RecibidoClients"+id)
  await deleteDoc(doc(db, "clients", id));
  location.reload();
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