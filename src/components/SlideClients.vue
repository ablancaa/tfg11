<template>
    <p>Usuarios On line</p>
        <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="slide in props.clients" :key="slide">
                <div class="carousel__item">
                    <span>
                    <img class="borderRadiusImgSlide" :src="slide.imgClient"/>
                        <br/>
                            <span v-if="slide.state == true">On line</span>
                            <span v-else>Disconnect</span>
                    </span>
                    <br/> {{ slide.name }}
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

</style>