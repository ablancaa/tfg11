<template>
    <p>Estados de Tickets</p>
    
        <Carousel :autoplay="3000" :wrap-around="true">
          
            <Slide v-for="slide in props.tickets" :key="slide">
              
                <div class="carousel__item item">
                
                  <h6><strong>{{ slide.idTicket }}</strong></h6>
                
                      
                  <span v-if="slide.state == 'procces'"><img src="../assets/proceso.png" width="50"/><br/><span class="yellow">Procces</span></span>
                            <span v-else><span class="red">End</span></span>
                </div>
                <br/>
     
               <div> 
                       
               </div>
            </Slide>
          
    <template #addons>
    </template>
  </Carousel>

</template>

<script setup>
import { onMounted, defineProps  } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
const props = defineProps({
    tickets: {
        type: Array,
    }
})
onMounted(() => {
    //getSlide();

  });
 
  
  
</script>

<style scoped>
.borderRadiusImgSlide {
    border-radius: 50%;
}
.item{
  border: 1px solid;
  padding: 5px;
  margin-left: -10px;
  margin-right: -10px;
  border-radius: 0.8em;
  background-color: #ffffff;
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

</style>