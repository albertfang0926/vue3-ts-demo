import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')



// // 完整引入Element-ui
// import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router).mount('#app')
// app.use(ElementPlus)
// app.mount('#app')
