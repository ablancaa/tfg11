<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Ticket Nº: {{ props.ticket.idTicket }}</h5>
    <p class="card-text"></p>
    <!-- <span v-for="technical in props.ticket.technical" :key="technical.idTicket">
                    <span v-for="user in users" :key="user.idUser"> 
                      <span class="" v-if="user.idUser == technical"><img class="css-shadow" :src="user.imgUser"/></span>
                      
                    </span> 
                    
              </span> -->
              
              <div class="incidencia" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <div class="perfil">
        
            <div class="technical">
            
              <span v-for="technical in props.ticket.technical" :key="technical.idTicket">
                    <div v-for="user in users" :key="user.idUser"> 
                      <div class="item" v-if="user.idUser == technical">
                        <router-link to="/UsersView" class="routerLink"><img class="css-shadow" :src="user.imgUser"/></router-link>
                        <!-- <span v-if="user.idUser == technical"><br/> {{ user.name }}</span> -->
                      </div>
                      
                    </div>  
              </span>
            </div>
        </div>
        
        </div>
        <br/>
        <p class="card-text">{{ props.ticket.description }}</p>
              <br/>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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
.incidencia {
    display: flex;
    width: 100%;
    background-color: rgb(230, 244, 255);
    margin-top: 10px;
    align-items:center;
    border: 1px solid #0022ff;
    border-radius: 15px;
}

.perfil {
    margin-left: 10px;
    width: 20%;
}
.card{
  margin-top: 15px;
}
.title{
    margin-top: 0px;
    text-align: left;
    width: 100%;
}

.estado {
    width: 100%;
    margin-top: 10px;
}
 
.technical{
  display: flex;
  margin-top: 10px;
  align-items: center;
}

.item{
  flex-direction: column;
}
.description{
    text-align: left;
}


.css-shadow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #cddc39;
  filter: drop-shadow(0 0 5px #ff5722);
  margin-left: 15px;
  margin-top: -6px;
}

</style>