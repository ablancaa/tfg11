<template>
  <div class="container">
    <h1>Bítacora de trabajo</h1>

    

  </div>
  <div class="container">
  <div class="row">
    <div class="col-xs col-md"><ul class="list-group">
      <li class="list-group-item">Instalación de Bootstrap 5</li>
      <li class="list-group-item">Maquetación de la web/app</li>
    </ul></div>
    <div class="col-xs col-md"><ul class="list-group">
      <li class="list-group-item">Instalación de Bootstrap 5</li>
    </ul></div>
    <div class="col-xs col-md"><ul class="list-group">
      <li class="list-group-item">Instalación de Bootstrap 5</li>
    </ul></div>
  </div>
  <hr/>
  <div class="row">
    <div class="col-xs col-md">
      <div class="bg-primary text-white">.bg-primary</div>
    <ul class="list-group">
      <li class="list-group-item"><CreditCard_1/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><CreditCard_2/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><Card_2/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><Card_4/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><Switch_2/><Button_2/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><Loader_2/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item card_1"><Loader_3/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item card_1"><Input_1/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><Button_1/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"></li>
    </ul>
    </div>
    <div class="col-xs col-md">
      <div class="bg-primary text-white">.bg-primary</div>
    <ul class="list-group">
      <li class="list-group-item"><CreditCard_3/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><CreditCard_4/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item card_1"><Card_1/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item card_2"><Switch_1/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item card_2"><Loader_1/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><Loader_4/></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><Loader_5/></li>
    </ul>
    </div>
  </div>
</div>

<br/>
  <!-- <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button> -->
</template>
<script setup>
import CreditCard_1 from '@/components/CreditCard_1';
import CreditCard_2 from '@/components/CreditCard_2';
import CreditCard_3 from '@/components/CreditCard_3';
import CreditCard_4 from '@/components/CreditCard_4';
import Card_1 from '@/components/Card_1';
import Card_2 from '@/components/Card_2';
import Card_4 from '@/components/Card_4';
import Switch_1 from '@/components/Toggle_switches_1.vue';
import Switch_2 from '@/components/Toggle_switches_2.vue';
import Loader_1 from '@/components/Loader_1.vue';
import Loader_2 from '@/components/Loader_2.vue';
import Loader_3 from '@/components/Loader_3.vue';
import Loader_4 from '@/components/Loader_4.vue';
import Loader_5 from '@/components/Loader_5.vue';
import Input_1 from '@/components/Input_1.vue';
import Button_1 from '@/components/Button_1';
import Button_2 from '@/components/Button_2';

</script>
<style  scoped>
.card_1{
  width: 450px;
}
.card_2{
  background-color: black;
}
</style>