<template>
  <BarState :titlePage="titlePage"/>
  <div class="home">
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
            <div class="item"><SlideClients :clients="clients"/></div>
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
            <div class="item"><SlideTickets :tickets="tickets"/></div>
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
            <div class="item"><SlideUsers :users="users"/></div>
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
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
       <img src="../assets/people.svg" width="50"/> <span class="tituloBotonDesplegable"><h1>Estado de Usuarios</h1></span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row">
      <div class="col-4"><SlideClients :clients="clients"/></div>
      <div class="col-4"><SlideUsers :users="users"/></div>
      <div class="col-4"><SlideTickets :tickets="tickets"/></div>
      </div>
        <p></p>
        
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <img src="../assets/people.svg" width="50"/> <span class="tituloBotonDesplegable"><h1>Slides Css</h1></span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="row fondo">
    <div class="col-sm-12 col-md-12 col-lg-6">
      <div class="slider-container">  
        <img
        class="slider-item"
        src="https://images.unsplash.com/photo-1580501170961-bb0dbf63a6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
        />
        <img
        class="slider-item"
        src="https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
        <img
          class="slider-item"
          src="https://images.unsplash.com/photo-1572508589584-94d778209dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
      </div>  
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6">
      <div class="slider-container">  
        <img
        class="slider-item"
        src="https://images.unsplash.com/photo-1580501170961-bb0dbf63a6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
        />
        <img
        class="slider-item"
        src="https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
        <img
          class="slider-item"
          src="https://images.unsplash.com/photo-1572508589584-94d778209dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
      </div>  
    </div>
  </div>
      </div>
    </div>
  </div>
</div>
  <hr/>
  
  <div class="row fondo">
    <div class="col-sm-12 col-md-6 col-lg-6"><h2>Array contadores</h2>{{contadores}}</div>
    <div class="col-sm-12 col-md-6 col-lg-6"></div>
  </div>
  
</div>
</template>

<script setup>
// @ is an alias to /src
import BarState from '@/components/BarState.vue'
import SlideClients from '@/components/SlideClients.vue'
import SlideUsers from '@/components/SlideUsers.vue'
import SlideTickets from '@/components/SlideTickets.vue'
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
  width: 50%;
  height: 50%;
}
.fondo {
  background-color:rgba(254, 254, 254, 0.633);
  padding: 5px;
  margin-bottom: 10px;
}
.tituloBotonDesplegable{
  margin-left: 6%;
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
  padding: 6px;
}
.item-slide{
  align-items: center;
}
.sizeFontFlexBox {
  font-size: 2rem;
  background-color: rgb(149, 189, 248);
  width: 80px;
  border-radius: 70px;
  color: rgb(255, 255, 255);
}

/* carrusel */


.slider-container {
  display: flex;
  width: 100%;
  height: 50vh;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.slider-container img {
  flex: 0 0 100%;
  width: 50%;
  object-fit: cover;
  scroll-snap-align: center;
}
</style>
