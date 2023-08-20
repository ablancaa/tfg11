<template>
        <BarState :titlePage="titlePage"/>
        <div class="container">
            <div class="flex-container" v-for="user in users" :key="user.idUser">
                <div class="flex-item"><p>{{ user.idUser }}</p></div>
                <div class="flex-item active" v-if="user.state == true"><img src="../assets/people.svg"/><br/>Active</div>
                <div class="flex-item disconnect" v-if="user.state == false" >Disconnect</div>          
                <div class="flex-item"><img class="css-shadow" :src="user.imgUser" /></div>
                <div class="flex-item"><p>{{ user.name }}</p></div>
                <div class="flex-item"><p>{{ user.surname1 }}</p></div>
                <div class="flex-item"><p>{{ user.surname2 }}</p></div>
                <div class="flex-item"><p>{{ user.rol }}</p></div>
                <div class="flex-item"><p>{{ user.email }}</p></div>
                <div class="flex-item">
                    <select>
                        <option v-for="num in user.phones" :key="num">{{ num }}</option>
                    </select>
                </div>
                <div class="flex-item"><button><img src="../assets/eliminar.png" width="20" /></button> <button><img src="../assets/eliminar.png" width="20" /></button> <button><img src="../assets/eliminar.png" width="20" /></button>
            </div>
</div>
            <div class="row">
                <div class="col-s-12 col-md-6 col-lg-12">
                    <table border="1">
                        <tr>
                            <td><strong>IdUser</strong></td>
                            <td><strong>State</strong></td>
                            <td><strong>Avatar</strong></td>
                            <td><strong>Name</strong></td>
                            <td><strong>Surname 1</strong></td>
                            <td><strong>Surname 2</strong></td>
                            <td><strong>Rol</strong></td>
                            <td><strong>E-mail</strong></td>
                            <td><strong>Phones</strong></td>
                            <td><strong>Acciones</strong></td>
                        </tr>
                        
                        <tr v-for="user in users" :key="user.idUser">
                            <td>{{ user.idUser }}</td>
                            <td v-if="user.state == true" class="active"><img src="../assets/people.svg"/><br/>Active</td>
                            <td v-if="user.state == false" class="disconnect">Disconnect</td>
                            <td><img class="css-shadow" :src="user.imgUser" /></td>
                            
                            <td>{{ user.name }}</td>
                            <td>{{ user.surname1 }}</td>
                            <td>{{ user.surname2 }}</td>
                            <td>{{ user.rol }}</td>
                            <td>{{ user.email }}</td>
                            <td><select>
                                    <option v-for="num in user.phones" :key="num">{{ num }}</option>
                                </select>
                            </td>
                            <td><button><img src="../assets/eliminar.png" width="20" /></button> <button><img src="../assets/eliminar.png" width="20" /></button> <button><img src="../assets/eliminar.png" width="20" /></button></td>
                        </tr>
                    </table>
                    <hr/>
                </div>
                
                <hr/>
                <div class="col-s-12 col-md-6 col-lg-12">
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