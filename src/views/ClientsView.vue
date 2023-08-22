<template>
    <BarState :titlePage="titlePage"/>
        <div class="container">
            <ClientList :clientsList="clients"/> 
        </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import BarState from '@/components/BarState.vue'
import ClientList from '@/components/ClientList.vue'
const titlePage = "CLIENTS VIEW"


let clients = reactive([]);

onMounted(() => {
getListado();
});

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
background-color: #7553fb85;
align-content: center;
align-items: center;
}

.flex-item {

background-color: #ddf1f8;
width: 100%;
height: 100%;
margin: 5px;
}
.flex-item-1 {

background-color: #ddf1f8;
width: 50%;
height: 100%;
margin: 5px;
}
</style>