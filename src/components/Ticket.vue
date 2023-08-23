<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
  <div class="row">
    <h3 class="card-title card-body">Ticket Nº: {{ props.ticket.idTicket }} - Cliente: {{ props.ticket.idClient }}</h3>
    <div class="col-md-4">
      <h6 class=""><strong>Técnicos Asignados</strong></h6>
      <span v-for="technical in props.ticket.technical" :key="technical.idTicket">
              <span v-for="user in users" :key="user.idUser">
                <span class="" v-if="user.idUser == technical">
                  <router-link to="/UsersView" class="routerLink"><img class="img-fluid rounded-start css-shadow " :src="user.imgUser" />{{ user.name }}</router-link>
                </span>
              </span>
            </span>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">{{ props.ticket.description }}</p>
        <p class="card-text">
        <small class="text-muted">
          <span class="yellow" v-if="ticket.state =='procces'"><img src="../assets/proceso.png" width="45"/>Procces</span>
          <span class="red" v-if="ticket.state =='end'"><img src="../assets/archivo.png" width="45"/><br/>End</span>
        </small></p>
      </div>
    </div>
  </div>
</div>
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