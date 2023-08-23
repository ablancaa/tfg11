<template>
    <BarState :titlePage="titlePage"/>
    <div class="container">
        <!-- <div class="col-s-12 col-md-6 col-lg-12">
                    <table border="1">
                        <tr>
                            <td>IdTicket</td>
                            <td><strong>Acciones</strong></td>
                            <td>Date</td>
                            <td colspan="3">technical</td>
                        </tr>
                        <tr v-for="ticket in tickets" :key="ticket.idTicket">
                            <td>{{ ticket.idTicket }}</td>
                            <td><button><img src="../assets/eliminar.png" width="20" /></button> <button>Añadir</button> <button>Desactivar</button></td>
                            <td>{{ ticket.date }}</td>
                            <td v-for="tecni in ticket.technical" :key="tecni.idTicket">{{ tecni }}
                           </td>   
                            
                        </tr>
                    </table>
                    <br/>
                </div> -->
                <TicketList :ticketsList="tickets" :users="users"/> 
 
       
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


</style>