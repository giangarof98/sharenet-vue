import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from '../includes/validation'
import './assets/tailwind.css'

createApp(App)
.use(router)
.use(VeeValidate)
.mount('#app')
