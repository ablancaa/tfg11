<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="fondo">
        <div class="container">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-4 col-lg-4 margenSuperiorCard">
                        <Card_4 />
                    </div>
                    <div class="col-sm-4 col-md-4 col-lg-4 margenSuperiorCard">
                        <Card_4 />
                    </div>
                    <div class="col-sm-4 col-md-4 col-lg-4 margenSuperiorCard">
                        <Card_4 />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Card_4 from '/src/components/Cards/Card_4.vue'
</script>

<style scoped>
.fondo {
    margin-top: 15px;
    background-color: rgb(194, 194, 250);
}

.img {
    width: 30%;
}

.margenSuperiorCard {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>