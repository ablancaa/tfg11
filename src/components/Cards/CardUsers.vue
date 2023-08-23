<template>
    <!-- <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="state" v-if="props.user.state==true"><span class="green">On Line</span></div>
                <div class="state" v-if="props.user.state==false"><span class="red">Disconnect</span></div>
                <span class="profile-image img"><img class="" :src="props.user.imgUser"/></span>
                <h5><strong>{{ props.user.name }}</strong></h5>
                <p>{{ props.user.surname1 }} {{ props.user.surname2 }}</p>  
            </div>
            <div class="flip-card-back">
                <p>{{props.user.name}}<br/></p> 
                <p>{{ props.user.surname1 }} {{ props.user.surname2 }}</p> 
                <p><strong>Tickets Asignados</strong></p>
            </div>
        </div>
    </div> -->
    <br/>
    <div class="cardUser flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="state" v-if="props.user.state==true"><span class="green">On Line</span></div>
                <div v-if="props.user.state==false"><span class="red">Disconnect</span></div>
                <span class="profile-image img"><img class="" :src="props.user.imgUser"/></span>
                <h5><strong>{{ props.user.name }}</strong></h5>
                <p>{{ props.user.surname1 }} {{ props.user.surname2 }}</p>
                <p class="email">{{ props.user.email }}</p>   
            </div>
            <div class="flip-card-back">
                
                <p>{{ props.user.idUser }}</p> 
                <h6 class="titulo">Tickets asociados al técnico</h6> 
                <div v-for="ticket in props.ticket" :key="ticket">
                <span v-for="tecnico in ticket.technical" :key="tecnico">
                    <span v-if="tecnico == props.user.idUser">
                        <img src="@/assets/Ticket.svg" width="35"/>
                        <router-link to="/TicketsView" class="routerLink">{{ ticket.idTicket }} | <span class="green" v-if="ticket.state =='procces'">{{ ticket.state }}</span><span class="red" v-if="ticket.state =='end'">{{ ticket.state }}</span></router-link>
                    </span>
                </span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { defineProps } from 'vue';
 const props = defineProps({
    ticket: {
        type: Object,
    },
    user: {
       type: Object,
    },
    
   })
   //console.log(props.ticket)
   //console.log(props.user)
</script>

<style scoped>
.titulo{
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
.routerLink {
    text-decoration: none;
}
.profile-image img {
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #96b2fe;
    margin: 5px 5px 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
.flip-card {

  width: 150px;
  height: 250px;
  perspective: 1000px;
  
}
.cardUser {
  background-color: transparent; 
  width: 100%;
  height: 250px;
  perspective: 1000px;
  border-radius: 10%;
  box-shadow: 0 15px 8px 0 rgba(77, 102, 245, 0.2);  
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10%;
  box-shadow: 0 4px 8px 0 rgba(36, 12, 173, 0.2);
  
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  background: #8ba3fb;
}
.email{
    font-size: 0.8rem;
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #1400c500;
  color: black;
  
}

.flip-card-back {
  background-color: #ecefff;
  color: black;
  transform: rotateY(180deg);

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
</style>