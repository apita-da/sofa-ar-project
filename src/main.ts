import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js';


import App from './App.vue'
// import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')
