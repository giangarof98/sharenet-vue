import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import veeValidatePlugIn from './includes/Validation'
import './assets/tailwind.css'

createApp(App)
.use(router)
// .use(veeValidatePlugIn)
.mount('#app')
