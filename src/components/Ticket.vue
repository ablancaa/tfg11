<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
    <div class="incidencia" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <div class="perfil">
            <div class="technical">
            
              <span v-for="technical in props.ticket.technical" :key="technical.idTicket">
                    <div v-for="user in users" :key="user.idUser"> 
                      <div class="item" v-if="user.idUser == technical"><img class="css-shadow" :src="user.imgUser"/><span v-if="user.idUser == technical"> {{ user.name }}</span> <!--{{ user.name }}--></div>
                      
                    </div>  
              </span>
            </div>
        </div>
        <div class="title">
            <h5>{{ props.ticket.idTicket }}</h5>
            <p class="description">{{ props.ticket.description }}</p>
        </div> 
        <div class="estado">
            <div class="items-estado">
                <p>Estado:<br/> {{ props.ticket.state }}</p>
               
                <p>fecha: {{ props.ticket.date }}</p>
            </div>
        </div>
 
    </div>
    <div class="collapse" id="collapseExample">
  <div class="card card-body">
    {{ props.ticket.description }}
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
  
  console.log(users)
  //console.log(tickets)
  //console.log(clients)
}

</script>

<style scoped>
.incidencia {
    display: flex;
    width: 100%;
    background-color: rgb(251, 212, 212);
    margin-top: 10px;
    align-items:center;
}

.perfil {
    margin-left: 10px;
    width: 20%;
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
  border: 2px solid #cddc39;
  filter: drop-shadow(0 0 10px #ff5722);
}

</style>