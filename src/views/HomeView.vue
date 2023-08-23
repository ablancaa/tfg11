<template>
  <BarState :titlePage="titlePage"/>
  <div class="home">
  </div>
<div class="container">
  <div class="row fondo">
    <div class="col-sm-12 col-md-4 col-lg-4 fondoOpcion">
      
        <div class="titulo ">
          <router-link to="/clientsView" class="routerLink">
          <h1><img class="borderRadius" src="../assets/Client.svg" width="80"/> Clientes</h1>
          </router-link>
          <div class="contenedorFlex">
            <div class="item">
              <router-link to="/clientsView" class="routerLink">Nº Clientes:</router-link><br/>
              <router-link to="/clientsView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[2].clientsNum }}</p></router-link>
            </div>
            <div class="item">
              <router-link to="/clientsView" class="routerLink">On Line:</router-link><br/>
              <router-link to="/clientsView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[2].clientsActive}}</p></router-link></div>
            <div class="item">
              <router-link to="/clientsView" class="routerLink">Disconnect:</router-link><br/>
              <router-link to="/clientsView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[2].clientsDisconnect }}</p></router-link></div>
            <div class="item"><SlideClients :clients="clients"/></div>
          </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 fondoOpcion">
     
        <div class="titulo">
     
      <router-link to="/ticketsView" class="routerLink">
          <h1><img class="borderRadius" src="../assets/Ticket.svg" width="80"/>Tickets</h1>
      </router-link>
          <div class="contenedorFlex">
            <div class="item">
              <router-link to="/ticketsView" class="routerLink">Nº Tickets:</router-link><br/>
              <router-link to="/ticketsView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[1].ticketsNum }}</p></router-link>
            </div>
            <div class="item">
              <router-link to="/ticketsView" class="routerLink">En proceso:</router-link><br/>
              <router-link to="/ticketsView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[1].ticketsProgress }}</p></router-link>
            </div>
            <div class="item">
              <router-link to="/ticketsView" class="routerLink">Resueltos:</router-link><br/>
              <router-link to="/ticketsView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[1].ticketsEnd }}</p></router-link>
            </div>
            <div class="item"><SlideTickets :tickets="tickets"/></div>
          </div>
        
        </div>
      
    </div>
    
    <div class="col-sm-12 col-md-4 col-lg-4 fondoOpcion">
      
        <div class="titulo">
          <router-link to="/usersView" class="routerLink">
          <h1><img class="borderRadius" src="../assets/Users.svg" width="80"/> Usuarios</h1>
        </router-link>
          <div class="contenedorFlex">
            <div class="item">
              <router-link to="/usersView" class="routerLink">Nº Usuarios:</router-link><br/>
              <router-link to="/usersView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[0].usersNum }}</p></router-link>
            </div>
            <div class="item">
              <router-link to="/usersView" class="routerLink">On Line:</router-link><br/>
              <router-link to="/usersView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[0].usersActive }}</p></router-link>
            </div>
            <div class="item"><router-link to="/usersView" class="routerLink">Disconnect:</router-link><br/>
              <router-link to="/usersView" class="routerLink"><p class="sizeFontFlexBox">{{ contadores[0].usersDisconnect }}</p></router-link></div>
            <div class="item"><SlideUsers :users="users"/></div>
          </div>
        </div>
    </div>
  </div>
  <hr/>
  <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Resumen de tickets
  </button>
</p>
<div style="max-height: 100%;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 100%;">
      <table class="table table-responsive table-striped">
    <thead>
        <tr>
            <th><h4>Nº Ticket</h4></th>
            <th><h4>Cliente</h4></th>
            <th><h4>Estado</h4></th>
            <th><h4>Técnico</h4></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="ticket in tickets" :key="ticket.idTicket">
            <td class="texto-vertical-2"><h3>{{ticket.idTicket}}</h3></td>
            <td>
              <span v-for=" client in clients" :key="client.idClient">
                <router-link to="/clientsView" class="routerLink">  <span v-if="ticket.idClient == client.idClient"><img :src="client.imgClient" width="45" class="css-shadow"/><br/>{{ client.name }} {{ client.surname1 }}<br/></span></router-link>
              </span>
            </td>
            
            <td>
              <span class="yellow" v-if="ticket.state =='procces'">{{ticket.idTicket}}<img src="../assets/proceso.png" width="45"/>Procces</span>
              <span class="red" v-if="ticket.state =='end'">{{ticket.idTicket}}<img src="../assets/archivo.png" width="45"/><br/>End</span>
            </td>
            <td>
             <span v-for="tecnico in ticket.technical" :key="tecnico"><img :src="users.imgUser" width="45"/>
             <span v-for="user in users" :key="user.idUser">
             <span v-if="tecnico == user.idUser"><img :src="user.imgUser" width="45" class="css-shadow"/><span class="margenName"><router-link to="/usersView" class="routerLink">{{ user.name }}</router-link></span></span>
             </span>
             </span>
            </td>
        </tr>
    </tbody>
</table>
    </div>
  </div>
</div>
  

  <hr/>
  
  <div class="row fondo">
    <div class="col-sm-12 col-md-12 col-lg-12"><ListToDo/></div>
    <div class="col-sm-12 col-md-12 col-lg-12"><h2>Array contadores</h2>{{contadores}}</div>
  </div>
  
</div>
</template>

<script setup>
// @ is an alias to /src
import BarState from '@/components/BarState.vue'
import SlideClients from '@/components/SlideClients.vue'
import SlideUsers from '@/components/SlideUsers.vue'
import SlideTickets from '@/components/SlideTickets.vue'
import ListToDo from '@/components/ListToDo.vue'
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
.margenName{
  margin-left: 10px;
}
.texto-vertical-2 {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    background-color: rgb(173, 241, 241);
}
.texto-vertical-3 {
  width:20px;
  word-wrap: break-word;
  text-align:center;
}
.css-shadow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #cddc39;
  filter: drop-shadow(0 0 5px #ff5722);
  margin-left: 15px;
  margin-top: 6px;
}
.routerLink{
     text-decoration: none;
 }
.borderRadius{
  border-radius: 5%;
}

.fondo {
  background-color:rgba(254, 254, 254, 0.633);
  padding: 5px;
  margin-bottom: 10px;
}
.fondoOpcion{
  border-radius: 10px;
  margin-top: 10px;
  
}
.titulo{
  background-color: rgba(241, 247, 252, 0.736);
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  height: 100%; 
  border: 1px solid;
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
  padding: 5px;
}
.sizeFontFlexBox {
  font-size: 2rem;
  background-color: rgb(149, 189, 248);
  width: 80px;
  border-radius: 70px;
  color: rgb(255, 255, 255);
}



span.yellow {
  background: #a09a00c2;
  border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  text-align: center;
  width: 6.1em;
  margin-top: 5px;
}
span.red {
  background: #a22c26;
  border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  text-align: center;
  width: 6.1em;
  margin-top: 5px; 
}

</style>
