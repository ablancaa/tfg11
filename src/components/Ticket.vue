<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
  <div class="card">
  <div class="row">
    <h3 class="card-title card-body">Ticket Nº: {{ props.ticket.idTicket }}</h3>
    <div class="col-md-4">
      <h6 class=""><strong>Técnicos Asignados</strong></h6>
      <span v-for="technical in props.ticket.technical" :key="technical.idTicket">
              <span v-for="user in users" :key="user.idUser">
                <span class="" v-if="user.idUser == technical">
                  <router-link to="/UsersView" class="routerLink"><img class="img-fluid rounded-start css-shadow " :src="user.imgUser" /></router-link>
                  <!-- <span v-if="user.idUser == technical"><br/> {{ user.name }}</span> -->
                </span>
              </span>
            </span>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">{{ props.ticket.description }}</p>
        <p class="card-text">
        <small class="text-muted">
          <span class="green" v-if="ticket.state =='procces'"><img src="../assets/proceso.png" width="45"/>Procces</span>
          <span class="red" v-if="ticket.state =='end'"><img src="../assets/menu.png" width="45"/><br/>End</span>
        </small></p>
      </div>
    </div>
  </div>
</div>

  <!-- <div class="card">
    <div class="card-body">
      <h5 class="card-title">Ticket Nº: {{ props.ticket.idTicket }}</h5>
      <p class="card-text"></p>
      <div class="incidencia" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
        aria-controls="collapseExample">
        <div class="perfil">
          <div class="technical">
            <span v-for="technical in props.ticket.technical" :key="technical.idTicket">
              <div v-for="user in users" :key="user.idUser">
                <div class="item" v-if="user.idUser == technical">
                  <router-link to="/UsersView" class="routerLink"><img class="css-shadow" :src="user.imgUser" /></router-link>
                
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <br />
      <p class="card-text">{{ props.ticket.description }}</p>
      <br />
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> -->
</template>

<script setup>
import { defineProps, onMounted, reactive } from 'vue';
import { db } from "../utils/FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";
const props = defineProps({
  ticket: {
    type: Object,
  },

})
const users = reactive([]);

//console.log(props.users);

onMounted(() => {
  getListadoUsers();
});
async function getListadoUsers() {
  const querySnapshotUsers = await getDocs(collection(db, "users"));


  querySnapshotUsers.forEach((doc) => {
    users.push(doc.data());
  });

  //console.log(users)
  //console.log(tickets)
  //console.log(clients)
}

</script>

<style scoped>



.card {
  margin-top: 12px;
}

.title {
  margin-top: 0px;
  text-align: left;
  width: 100%;
}

.estado {
  width: 100%;
  margin-top: 10px;
}

.technical {
  display: flex;
  margin-top: 10px;
  align-items: center;
}

.item {
  flex-direction: column;
}
span.green {
  background: #5EA226;
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


.css-shadow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #cddc39;
  filter: drop-shadow(0 0 5px #ff5722);
  margin-left: 15px;
  margin-top: 6px;
}
</style>