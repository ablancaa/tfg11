<template>
    <BarState :titlePage="titlePage"/>
    <div class="container">
        <hr/>
        <div class="flex-container">
            <div class="flex-item"> idClient </div>
            <div class="flex-item"> imgClient </div>
            <div class="flex-item">name</div>
            <div class="flex-item">surname1 </div>
            <div class="flex-item">surname2 </div>
           
        </div>
        
        <div class="flex-container" v-for="client in clients" :key="client.idClient">
           
            <div class="flex-item">{{ client.idClient }}</div>
            <div class="flex-item"><img class="css-shadow" :src="client.imgClient" /></div>
            <div class="flex-item">{{ client.name }}</div>
            <div class="flex-item">{{ client.surname1 }}</div>
            <div class="flex-item">{{ client.surname2 }}</div>

            <!-- <div class="flex-item">6</div>
            <div class="flex-item">7</div>
            <div class="flex-item">8</div>
            <div class="flex-item">9</div>
            <div class="flex-item">10</div> -->
        </div>
        <hr/>
            <!-- <div class="col-s-12 col-md-6 col-lg-12">
                <table border="0">
                    <tr>
                        <td>IdClient</td>
                        <td>Avatar</td>
                        <td>Name</td>
                        <td>Surname 1</td>
                        <td>Surname 2</td>
                    </tr>
                    <tr v-for="client in clients" :key="client.idClient">
                        <td>{{ client.idClient }}</td>
                        <td><img class="css-shadow" :src="client.imgClient" /></td>
                        <td>{{ client.name }}</td>
                        <td>{{ client.surname1 }}</td>
                        <td>{{ client.surname2 }}</td>
                    </tr>
                </table>
            </div> -->
        </div>

</template>

<script setup>
import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import BarState from '@/components/BarState.vue'

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
</style>