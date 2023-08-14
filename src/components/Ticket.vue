<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="incidencia" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <div class="perfil">
            <img class="circular--square" src="https://w7.pngwing.com/pngs/639/467/png-transparent-super-mario-bros-paper-mario-the-thousand-year-door-champignon-super-mario-bros-nintendo-smiley.png" width="50" />
            <div class="technical">
                <!-- <p>{{ props.ticket.technical[0] }}</p> -->
                <span v-for="technical in props.ticket.technical" :key="technical.idTicket">
                    {{ technical }}
                </span>
                <br/>
            </div>
        </div>
        <div class="title">
            <h5>{{ props.ticket.idTicket }}</h5>
            <p class="description">{{ props.ticket.description }}</p>
        </div> 
        <div class="estado">
            <div class="items-estado">
                <p>Estado</p>
                <p>Progreso</p>
                <p>fecha: {{ props.ticket.date }}</p>
            </div>
        </div>
 
    </div>
    <div class="collapse" id="collapseExample">
  <div class="card card-body">
    {{ props.ticket.description }}
  </div>
  <div class="row">
    <div class="col-md-6">
        <button class="accordion"><img src="" height="50" class="colorTituloTemAmb marginRight" alt="Icono Temperatura Ambiente" /> <span class="">Temperatura Ambiente</span></button>
        <div class="panel centrarGrafico">
            <div class="col-sm-12 col-md-6 centrarGrafico">
                <canvas id="myChart1"></canvas>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <button class="accordion">
            <img src="" height="50" class="colorTituloLuzAmb marginRight" alt="Icono Luz Ambiental" /> <span class="">Luz Ambiental</span>
        </button>
        <div class="panel centrarGrafico">
            <div class="col-sm-12 col-md-6 centrarGrafico">
                <canvas id="myChart2"></canvas>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <button class="accordion">
            <img src="" height="50" class="colorTituloHumAmb marginRight" alt="Icono Humedad Ambiente" /><span class="">Humedad Ambiente</span> 
        </button>
        <div class="panel centrarGrafico">
            <div class="col-sm-12 col-md-6 centrarGrafico">
                <canvas id="myChart4"></canvas>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <button class="accordion">
            <img src="" height="50" class="colorTituloHumTie marginRight" alt="Icono Humedad Tierra" /> <span class="">Humedad Tierra</span>
        </button>
        <div class="panel centrarGrafico">
            <div class="col-sm-12 col-md-6 centrarGrafico">
                <canvas id="myChart3"></canvas>
            </div>
        </div>
    </div>
</div><!-- FIN DE ROW -->
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
    margin-top: 10px;
    text-align: left;
    width: 100%;
}

.estado{
    width: 100%;
    margin-top: 10px;
}
.technical{
    align-items: center;
}
.description{
    text-align: left;
}
</style>