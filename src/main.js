import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import Modal from "vue-bs-modal";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import withUUID from "vue-uuid";



createApp(App).use(router, Modal, withUUID).mount('#app')
import "bootstrap/dist/js/bootstrap.js"