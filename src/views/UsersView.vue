<template>
        <BarState :titlePage="titlePage"/>
        
        <div class="container">
            <SearchBar v-on:search="setSearchTerm" class=""/>
            <div class="row botonera">
              <div class="col-xs-12 col-md-2 col-lg-2">
                <button class="btn btn-outline-primary" @click="addUser">Add User</button>
              </div>
            </div>
            <PopUpFormUsers v-if="showModal" @close="showModal = false"/>
            <UsersList :usersList="itemListFiltered" :ticketList="tickets"/> 
        </div>   
            
 

     
</template>

<script setup>
import { reactive, onMounted, ref, computed } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import BarState from '@/components/BarState.vue'
import UsersList from "@/components/UsersList.vue";
import SearchBar from "@/components/SearchBar.vue";
import PopUpFormUsers from "@/components/PopUpUsersForm.vue"
const titlePage = "USERS VIEW"
let users = reactive([]);
let tickets = reactive([]);
let clients = reactive([]);
let searchTerm = ref("");
let showModal = ref(false);

onMounted(() => {
  getListado();
});

const itemListFiltered = computed(() => {
  if (!searchTerm.value) {
    return users;
  } else if (searchTerm.value) {
    return users.filter((item) => {
      return (
        item.idUser.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.surname1.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.surname2.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        item.email.includes(searchTerm.value) 
      );
    });
  }
  return users;
});
function addUser(){
  showModal.value = true;
}
function setSearchTerm(search) {
  //console.log(search);
  searchTerm.value = search;
}

async function getListado() {
  const querySnapshotUsers = await getDocs(collection(db, "users"));
  const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  const querySnapshotClients = await getDocs(collection(db, "clients"));
  querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
  });
  querySnapshotTickets.forEach((doc) => {
    tickets.push(doc.data());
  });
  querySnapshotClients.forEach((doc) => {
    clients.push(doc.data());
  });
  //console.log(users)
  //console.log(tickets)
  //console.log(clients)
}

</script>

<style scoped>
.botonera{
  margin-top: 10px;
  height: auto;
  background-color: aliceblue;
  border-radius: 5px;
}
table {
	width:100%;
	border-spacing: 10px 25px;
	border:0px solid black;
}
td {
	border:0.5px solid black;
}

.active {
    background-color: aquamarine;
}

.disconnect{
    background-color: rgb(255, 183, 163);
}
.css-shadow {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  border: 2px solid #cddc39;
  filter: drop-shadow(0 0 10px #ff5722);
}
.flex-container {
    display: flex;
    width: 100%;
    height: auto;
    background-color: #DDF58C;
   
    
}

.flex-item {
    background-color: #67C3E6;
    width: 100%;
    height: auto;
    margin: 3px;
    align-items: center;
    align-content: center;
}
</style>