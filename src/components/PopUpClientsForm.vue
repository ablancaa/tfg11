<template>
    <div id="modal">
    
        <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" :src="avatar"><span class="font-weight-bold">{{ name }}</span><span class="text-black-50">{{email}}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">idClient</label><input type="text" class="form-control" :placeholder="id" v-model="idClient" disabled></div>
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" v-model="name"></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" placeholder="surname1" v-model="surname1"></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" placeholder="surname2" v-model="surname2"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Avatar</label><input type="text" class="form-control" placeholder="enter Mobile phone number" v-model="avatar"></div>
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter Mobile phone number" v-model="mobile"></div>
                    <div class="col-md-12"><label class="labels">Lanline Number</label><input type="text" class="form-control" placeholder="enter Landline phone number" v-model="landline"></div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" v-model="adress"></div>
                    <!-- <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div> -->
                    <!-- <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="Postcode" value=""></div>-->
                    <!-- <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="State" value=""></div> -->
                    <!-- <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div> -->
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email" v-model="email"></div>
                    <!-- <div class="col-md-12"><label class="labels">idClient</label><input type="text" class="form-control" :placeholder="id" v-model="idClient" disabled></div> -->
                </div>
                <!-- <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div> -->
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="newClient">Save Profile</button> <button @click="emit('close')" class="btn btn-primary profile-button">Cerrar</button></div>
            </div>
        </div>
        <!-- <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></div> <br>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
            </div>
        </div> -->
    </div>
</div>
</div>
</template>
<script setup>

import{ ref, reactive, defineEmits } from 'vue'
import { uuid } from 'vue-uuid';

const emit = defineEmits(['newClient','close'])

let id = ref(uuid.v1());
let avatar = ref('https://i.pravatar.cc/80');
let name = ref("");
let surname1 = ref("");
let surname2 = ref("");
let mobile = ref("");
let landline = ref("");
let adress = ref("");
let email = ref("");
let idClient = ref("");
let newUser = reactive({})

const newClient = () => {
    if(name.value == ''){
        alert("Nombre no introducido");
    } else {
         newUser = ({
            idClient: id.value,
            name: name.value,
            avatar: avatar.value,
            surname1: surname1.value,
            surname2: surname2.value,
            state: false,
            adress: adress.value,
            email: email.value,
            phones: {
                mobile: mobile.value,
                landline: landline.value,
            },
   
        });
    }
    emit('newClient', newUser);
    //console.log(newUser);
}

</script>
<style scoped>
#modal {
  background: rgba(0, 0, 0, 0.4);
  color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all .5s;
  z-index: 10;
  overflow-y: scroll;
}

body {
    background: rgb(99, 39, 120);
    color: #000000;
}

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #000000;
    cursor: pointer
}

.labels {
    font-size: 11px;
    color:#000000;
}

.add-experience:hover {
    background: #BA68C8;
    color: #ffffff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
</style>