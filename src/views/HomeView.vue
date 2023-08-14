<template>
  <BarState :titlePage="titlePage"/>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
<div class="container">
  <div class="row fondo">
    <div class="col-sm-12 col-md-4 col-lg-4"><img class="borderRadius img" src="https://static.vecteezy.com/system/resources/previews/005/211/228/original/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"/><div class="titulo"><h2>Estado de Tickets</h2></div></div>
    <div class="col-sm-12 col-md-4 col-lg-4"><img class="borderRadius img" src="https://static.vecteezy.com/system/resources/previews/005/211/228/original/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"/><div class="titulo"><h2>Tickets</h2></div></div>
    <div class="col-sm-12 col-md-4 col-lg-4"><router-link to="/usersView" class=""><img class="borderRadius img" src="https://static.vecteezy.com/system/resources/previews/005/211/228/original/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"/><div class="titulo"><h2>Usuarios</h2></div></router-link></div>
  </div>
  <hr/>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
    <div class="col-sm-6 col-md-4 col-lg-4"><CreditCard_4/><div class="titulo"></div></div>
  </div>
  <hr/>
   <div class="row fondo">
    <div class="col-sm-12 col-md-6 col-lg-6"><img class="borderRadius img" src="https://static.vecteezy.com/system/resources/previews/005/211/228/original/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"/></div>
    <div class="col-sm-12 col-md-6 col-lg-6"><img class="borderRadius img" src="https://static.vecteezy.com/system/resources/previews/005/211/228/original/man-working-on-laptop-illustration-work-from-home-cartoon-character-free-vector.jpg"/></div>
  </div>
</div>
</template>

<script setup>
// @ is an alias to /src
import BarState from '@/components/BarState.vue'
import CreditCard_4 from '@/components/CreditCards/CreditCard_4.vue'
const titlePage = "HOME";
</script>
<style scoped>
.borderRadius{
  border-radius: 5%;
}
.borderRadius:hover{
 border-radius: 15%;
-webkit-box-shadow: 2px 10px 5px 0px rgba(121, 244, 236, 0.787);
-moz-box-shadow: 2px 10px 5px 0px rgba(132, 250, 238, 0.44);
box-shadow: 2px 10px 5px 0px rgba(92, 222, 251, 0.44);
}
.img {
  width: 80%;
  height: 80%;
}
.fondo {
  background-color:rgb(207, 223, 252);
  padding: 10px;
  border-radius: 2%;
}
.titulo{
  background-color: aliceblue;
  border-radius: 10px;
  margin-top: 15px;
  width: 100%;
}
</style>
