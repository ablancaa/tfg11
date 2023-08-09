<template>
     <HelloWorld msg="TFG 1 - Herramienta Ticketing"/>
    <BarState :titlePage="titlePage"/>
    <div class="container">
        <div class="row">
            <div class="col-xs col-md">
                <ul class="list-group">
                    <li class="list-group-item"><strong>FECHA</strong></li>
                    <li class="list-group-item">09/08/2023</li>
                </ul>
            </div>
            <div class="col-xs col-md">
                <ul class="list-group">
                    <li class="list-group-item"><strong>ACCION</strong></li>
                    <li class="list-group-item">Creación de nuevas páginas</li>
                    <li class="list-group-item">Creación de Barra para estado</li>
                    <li class="list-group-item">Creación de Barra para estado</li>
                </ul>
            </div>
            <div class="col-xs col-md">
                <ul class="list-group">
                    <li class="list-group-item"><strong>COMENTARIO</strong></li>
                    <li class="list-group-item">* * * * *</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import BarState from '@/components/BarState.vue'
const titlePage = "BITACORA";

</script>
<script>
export default {
  name: 'Bitacora-View'
}
</script>
<style scoped>
</style>