<template>
        <BarState :titlePage="titlePage"/>
        <div class="container">
            <div class="row">
                <div class="col-s-12 col-md-6">
                    <table border="1">
                        <tr>
                            <td><strong>State</strong></td>
                            <td><strong>IdUser</strong></td>
                            <td><strong>Name</strong></td>
                            <td><strong>Rol</strong></td>
                        </tr>
                        <tr v-for="user in users" :key="user.idUser">
                            <td v-if="user.state =='active'" class="active">{{ user.state }}</td>
                            <td v-if="user.state =='disconnect'" class="disconnect">{{ user.state }}</td>
                            <td>{{ user.idUser }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.rol }}</td>
                        </tr>
                    </table>
                    <hr/>
                </div>
                <div class="col-s-12 col-md-6">
                    <table border="1">
                        <tr>
                            <td>IdTicket</td>
                            <td>Date</td>
                            <td>technical</td>
                        </tr>
                        <tr v-for="ticket in tickets" :key="ticket.idTicket">
                            <td>{{ ticket.idTicket }}</td>
                            <td>{{ ticket.date }}</td>
                            <td>{{ ticket.technical[0] }}</td>
                        </tr>
                    </table>
                    <br/>
                </div>
                
                <hr/>
                <div class="col-s-12 col-md-6">
                    <table border="1">
                        <tr>
                            <td>IdClient</td>
                            <td>Name</td>
                            <td>Surname 1</td>
                            <td>Surname 2</td>
                        </tr>
                        <tr v-for="client in clients" :key="client.idClient">
                            <td>{{ client.idClient }}</td>
                            <td>{{ client.name }}</td>
                            <td>{{ client.surname1 }}</td>
                            <td>{{ client.surname2 }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
import BarState from '@/components/BarState.vue'

const titlePage = "USERS VIEW"
let users = reactive([]);
let tickets = reactive([]);
let clients = reactive([]);

onMounted(() => {
  getListado();
});

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