<template>
    <p>Estados de Clientes</p>
        <Carousel :autoplay="3000" :wrap-around="true">
            <Slide v-for="slide in props.clients" :key="slide">
                <div class="carousel__item">
                    <span>
                    <img class="borderRadiusImgSlide" :src="slide.imgClient"/>
                        <br/>
                            <span v-if="slide.state == true"><span class="green">On Line</span></span>
                            <span v-else class="red">Disconnect</span>
                    </span>
                    <br/> <h5>{{ slide.name }}</h5>
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
    clients: {
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