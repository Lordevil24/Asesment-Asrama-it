
import './assets/script.bootstrap.js'
import './assets/bootstrap.min.css'




import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')