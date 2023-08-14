<template>
    <div class="topnav" id="myTopnav">

        <router-link to="/" class="active">Home</router-link>
        <router-link to="/ticketsView">Tickets View</router-link>
        <router-link to="/usersView">Users View</router-link>
        <router-link to="/bitacora">Bitácora</router-link>
        <router-link to="/tablerosView">Tableros</router-link>
        <router-link to="/about">Ejemplos</router-link>
        <a href="javascript:void(0);" class="icon" @click="myFunction">
            <i class="fa fa-bars"></i>
        </a>
    </div>

    <!-- <div style="padding-left:16px">
  <h2>Responsive Topnav Example</h2>
  <p>Resize the browser window to see how it works.</p>
</div> -->
</template>

<script setup>
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
</script>

<style scoped>
.topnav {
    overflow: hidden;
    background-color: #333;
}

.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav a:hover {
    background-color: #93b5fa;
    color: black;
}

.topnav a.active {
    background-color: #7099f7;
    color: white;
}

.topnav .icon {
    display: none;
}

@media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
        display: none;
    }

    .topnav a.icon {
        float: right;
        display: block;
    }
}

@media screen and (max-width: 600px) {
    .topnav.responsive {
        position: relative;
    }

    .topnav.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}</style>