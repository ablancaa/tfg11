<template>
    <BarState :titlePage="titlePage"/>
    <div class="container">
        <div class="row">
            <div class="col-s-12 col-md-12">  
                <TicketList :ticketsList="tickets" :users="users"/> 
            </div>
            <div class="col-s-12 col-md-6">    
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import BarState from '@/components/BarState.vue'
import TicketList from '@/components/TicketList.vue'

const titlePage = "TICKETS VIEW"

let tickets = reactive([]);
let users = reactive([]);
onMounted(() => {
getListado();
});

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
table {
width:100%;
border-spacing: 10px 25px;
border:2px solid black;
}
td {
border:2px solid black;
}

.active {
background-color: aquamarine;
}

.disconnect{
background-color: rgb(255, 183, 163);
}

</style>