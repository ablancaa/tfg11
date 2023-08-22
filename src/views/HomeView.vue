<template>
  <BarState :titlePage="titlePage"/>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
<div class="container">
  <div class="row fondo">
    <div class="col-sm-12 col-md-4 col-lg-4 fondoOpcion">
      <router-link to="/clientsView">
        <div class="titulo ">
          <h2><img class="borderRadius" src="../assets/Client.svg" width="80"/> Clientes</h2>
          <div class="contenedorFlex">
            <div class="item">Nº Clientes:<br/><p class="sizeFontFlexBox">{{ contadores[2].clientsNum }}</p></div>
            <div class="item">On Line:<br/><p class="sizeFontFlexBox">{{ contadores[2].clientsActive}}</p></div>
            <div class="item">Disconnect:<br/><p class="sizeFontFlexBox">{{ contadores[2].clientsDisconnect }}</p></div>
          </div>
        </div>
      </router-link>
      <!-- <div>
        <span class="itemUsuario usuario"><img class="borderRadius" src="../assets/Client.svg" width="50"/><router-link to="/clientsView">Nº Clients </router-link>{{ clients.length }}</span>
        <span class="itemUsuario usuario"><img class="borderRadius" src="../assets/Client.svg" width="50"/><router-link to="/clientsView">On Line:</router-link> {{ numActive }}</span>
        <p class="itemUsuario usuario"><img class="borderRadius" src="../assets/Client.svg" width="50"/><router-link to="/clientsView">Disconnect</router-link></p> 
      </div> -->
     
      
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 fondoOpcion">
      <router-link to="/ticketsView">
        <div class="titulo">
          
          <h2><img class="borderRadius" src="../assets/Ticket.svg" width="80"/>Tickets</h2>
          <div class="contenedorFlex">
            <div class="item">Nº Tickets:<br/><p class="sizeFontFlexBox">{{ contadores[1].ticketsNum }}</p></div>
            <div class="item">En proceso:<br/><p class="sizeFontFlexBox">{{ contadores[1].ticketsProgress }}</p></div>
            <div class="item">Resueltos:<br/><p class="sizeFontFlexBox">{{ contadores[1].ticketsEnd }}</p></div>
          </div>
        </div>
      </router-link>
      <!-- <div>
        <span class="itemUsuario usuario"><img class="borderRadius" src="../assets/Ticket.svg" width="50"/><router-link to="/ticketsView">Nº Tickets: </router-link>{{ tickets.length }}</span>
        <span class="itemUsuario usuario"><img class="borderRadius" src="../assets/Ticket.svg" width="50"/><router-link to="/usersView">Estado:</router-link> {{ users.state }}</span>
        <p class="itemUsuario usuario"><img class="borderRadius" src="../assets/Ticket.svg" width="50"/><router-link to="/usersView">Disconnect:</router-link></p> 
      </div> -->
      
    </div>
    
    <div class="col-sm-12 col-md-4 col-lg-4 fondoOpcion">
      <router-link to="/usersView">
        <div class="titulo">
          
          <h2><img class="borderRadius" src="../assets/Users.svg" width="80"/> Usuarios</h2>
          <div class="contenedorFlex">
            <div class="item">Nº Usuarios:<br/><p class="sizeFontFlexBox">{{ contadores[0].usersNum }}</p></div>
            <div class="item">On Line:<br/><p class="sizeFontFlexBox">{{ contadores[0].usersActive }}</p></div>
            <div class="item">Disconnect:<br/><p class="sizeFontFlexBox">{{ contadores[0].usersDisconnect }}</p></div>
          </div>
        </div>
      </router-link>
      <!-- <div>
        <span class="itemUsuario usuario"><img class="borderRadius" src="../assets/Users.svg" width="50"/><router-link to="/usersView">Nº Usuarios: </router-link>{{ users.length }}</span>
        <span class="itemUsuario usuario"><img class="borderRadius" src="../assets/Users.svg" width="50"/><router-link to="/usersView">On Line:</router-link> {{ users.state }}</span>
        <p class="itemUsuario usuario"><img class="borderRadius" src="../assets/Users.svg" width="50"/><router-link to="/usersView">Disconnect:</router-link></p> 
      </div> -->
      
    </div>
  </div>
  <!-- <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
  </div> -->
  <hr/>
   <div class="row fondo">
    <div class="col-sm-12 col-md-6 col-lg-6"><img class="borderRadius img" src="https://static.vecteezy.com/system/resources/previews/005/211/228/original/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"/></div>
    <div class="col-sm-12 col-md-6 col-lg-6"><img class="borderRadius img" src="https://static.vecteezy.com/system/resources/previews/005/211/228/original/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"/></div>
  </div>
  <div class="row fondo">
    <div class="col-sm-12 col-md-6 col-lg-6"><h2>Array contadores</h2>{{contadores}}</div>
    <div class="col-sm-12 col-md-6 col-lg-6"></div>
  </div>
  
</div>
</template>

<script setup>
// @ is an alias to /src
import BarState from '@/components/BarState.vue'
//import CreditCard_4 from '@/components/CreditCards/CreditCard_4.vue'
import { reactive, onMounted } from "vue";
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";

const titlePage = "HOME";

let users = reactive([]);
let tickets = reactive([]);
let clients = reactive([]);

let contadores = reactive([
  { usersNum: 0,
    usersActive: 0,
    usersDisconnect: 0
  },
  {
    ticketsNum: 0,
    ticketsProgress: 0,
    ticketsEnd: 0 
  },
  {
    clientsNum: 0,
    clientsActive: 0,
    clientsDisconnect: 0 
  },
])



  onMounted(() => {
    getListados();
    
  });

async function getListados() {
  
  const querySnapshotUsers = await getDocs(collection(db, "users"));
  const querySnapshotTickets = await getDocs(collection(db, "tickets"));
  const querySnapshotClients = await getDocs(collection(db, "clients"));
  
  querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
    let activesUsers = users.filter(user => user.state == true)
    let disconnectUsers = users.filter(user => user.state == false)
    contadores[0].usersNum = users.length;
    contadores[0].usersActive = activesUsers.length;
    contadores[0].usersDisconnect = disconnectUsers.length;
  });
  
  querySnapshotTickets.forEach((doc) => {
    tickets.push(doc.data());
    let ticketProcces = tickets.filter(ticket => ticket.state == "procces")
    let ticketEnd = tickets.filter(ticket => ticket.state == "end")
    contadores[1].ticketsNum = tickets.length
    contadores[1].ticketsProgress = ticketProcces.length
    contadores[1].ticketsEnd = ticketEnd.length
  });
  
  querySnapshotClients.forEach((clientsList) => {
    clients.push(clientsList.data());
    let activesClients = clients.filter(client => client.state == true)
    let disconnectClients = clients.filter(client => client.state == false)
    contadores[2].clientsNum = clients.length
    contadores[2].clientsActive = activesClients.length;
    contadores[2].clientsDisconnect = disconnectClients.length;
  });
  
  //console.log(users)
  //console.log(tickets)
  //console.log(clients)
}
</script>
<style scoped>
.borderRadius{
  border-radius: 5%;
}
/* .borderRadius:hover{
 border-radius: 15%;
-webkit-box-shadow: 2px 10px 5px 0px rgba(121, 244, 236, 0.787);
-moz-box-shadow: 2px 10px 5px 0px rgba(132, 250, 238, 0.44);
box-shadow: 2px 10px 5px 0px rgba(92, 222, 251, 0.44);
} */
.img {
  width: 80%;
  height: 80%;
}
.fondo {
  background-color:rgb(207, 223, 252);
  padding: 10px;
  border-radius: 2%;
  width: auto;
}

.fondoOpcion{
  /* background-color: rgb(96, 111, 245); */
  border-radius: 10px;
  margin-top: 20px;
}
.titulo{
  background-color: aliceblue;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%; 
}




.contenedorFlex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: normal;
  align-content: normal;
  align-content: space-around;
  font-size: 16px;
}
.item{
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  padding: 6px;
 
  
}
.sizeFontFlexBox {
  font-size: 2rem;
  background-color: rgb(149, 189, 248);
  width: 100px;
  border-radius: 70px;
  color: azure;
  
}
</style>
