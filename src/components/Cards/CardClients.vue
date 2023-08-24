<template>

<div class="profile-page">
    <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12">
            <div class="card profile-header">
                <div class="body">
                    <div class="row">
                        <p>{{ props.client.idClient }}</p> 
                        <div class="col-xs-12 col-md-6 col-lg">
                            <div class="profile-image float-md-right"> <img :src="props.client.imgClient" alt=""> 
                                <p class="social-icon m-t-5 m-b-0">
                                
                                <a title="Twitter" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Facebook" href="javascript:void(0);"><i class="fa fa-facebook"></i></a>
                                <a title="Google-plus" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Behance" href="javascript:void(0);"><i class="fa fa-behance"></i></a>
                                <a title="Instagram" href="javascript:void(0);"><i class="fa fa-instagram "></i></a>
                                
                            </p>
                            
                            <div class="state" v-if="props.client.state==true"><span class="green">On Line</span></div>
                            <div class="state" v-if="props.client.state==false"><span class="red">Disconnect</span></div>
                            </div>
                           
                       
                        </div>
                        <div class=" col-xs-12 col-md-6 col-lg">
                            <h4 class="m-t-0 m-b-0"><strong>{{props.client.name}}</strong> {{props.client.surname1}} {{props.client.surname2}}</h4>
                            
                            <span class="job_post">Ui UX Designer</span>
                            <p>{{props.client.adress}}</p>
                            
                            
                            <div>
                            <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary btn-round" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Detalle
                                </button>
                                <!-- <button class="btn btn-primary btn-round">Detalle</button> -->
                                <button class="btn btn-primary btn-round buttonMargen">Message</button>
                            </div>
                            <p class="social-icon m-t-5 m-b-0">
                  
                            </p>
                        </div>                
                    </div>
                    <span class="fa fa-phone">
                    <span class="email"> 
                                <select>
                                <option v-for="phone in client.phones" :key="phone">{{ phone }}</option>
                                </select>
                            </span>
                            </span><br/>
                    <span class="fa fa-envelope-open"></span>
                    <span class="email"><span>{{ props.client.email }}</span></span>
                    <div class="actions">
                    <hr/>
                        <button @click="deleteClient(props.client.idClient)">
                        <img src="../../assets/basura.png" width="20" />
                    </button>
             
                   
                    </div>
                </div>                    
            </div>
        </div>
    </div>
</div>
                     
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  client: {
      type: Object,
    }
})
const emit = defineEmits(['deleteClient'])

const deleteClient = () =>{
    emit('deleteClient', props.client.idClient)
    console.log("delete",props.client.idClient)
}
</script>

<style scoped>
body{
    margin-top:20px;
    background:#eee;
      
}
a {
    color: #000000;
}
.m-t-5{
    margin-top: 15px;   
}
.buttonMargen{
    margin: 5px
}
.card {
    margin-top: 10px;
    background: #fff;
    margin-bottom: 30px;
    transition: .5s;
    border: 0;
    border-radius: .1875rem;
    display: inline-block;
    position: relative;
    width: 100%;
    
    box-shadow: none;
}
.card .body {
    font-size: 14px;
    color: #424242;
    padding: 5px;
    font-weight: 400;
    
    border: solid 0.1px;
    border-radius: 1rem;
    box-shadow: 0 3px 6px rgba(0, 21, 255, 0.345), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.email{
    font-size: 16px;
    color: #424242;
    padding: 4px;
    font-weight: 400;
    border-radius: 1rem;
    margin-top: -5px;
    width: 100%;
}
.profile-page .profile-header {
    position: relative;
    
    
}

.profile-page .profile-header .profile-image img {
    border-radius: 50%;
    margin-bottom: 15px;
    width: 140px;
    
    border: 3px solid #fff;
    margin: 5px 5px 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  

}

.profile-page .profile-header .social-icon a {
    margin: 0 5px;
}

.profile-page .profile-sub-header {
    min-height: 60px;
    width: 100%;
}

.profile-page .profile-sub-header ul.box-list {
    display: inline-table;
    table-layout: fixed;
    width: 100%;
    background: #eee
}

.profile-page .profile-sub-header ul.box-list li {
    border-right: 1px solid #e0e0e0;
    display: table-cell;
    list-style: none;
}

.profile-page .profile-sub-header ul.box-list li:last-child {
    border-right: none;
    
}

.profile-page .profile-sub-header ul.box-list li a {
    display: block;
    padding: 15px 0;
    color: #424242;
}

.state{
    margin-top: -15px;
    margin-bottom: 10px;
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
  margin-right: 0px;
  text-align: center;
  width: 6.1em; 
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
  margin-right: 0px;
  text-align: center;
  width: 6.1em; 
}
</style>