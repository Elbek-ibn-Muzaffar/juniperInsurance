import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import * as config from './config/config.js'
import store from './config/store'
// import { from } from 'core-js/core/array'


const app = createApp(App).use(router)
app.use(store)
app.config.productionTip = false
installElementPlus(app)
config.initVueApp()
app.mount('#app')
