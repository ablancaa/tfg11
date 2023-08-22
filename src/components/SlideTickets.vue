<template>
    <p>Estados de Tickets</p>
        <Carousel :autoplay="3000" :wrap-around="true">
            <Slide v-for="slide in props.tickets" :key="slide">
                <div class="carousel__item">
                  {{ slide.idTicket }}
                  <br/>
                      
                  <span v-if="slide.state == 'procces'"><span class="yellow">Procces</span></span>
                            <span v-else class="red">End</span>
                
                    <br/><br/>{{ slide.description }}
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