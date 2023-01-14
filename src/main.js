import { createApp } from 'vue'

import './assets/main.less'

import App from './App.vue'

const app = createApp(App)

// 全局全部引入
import ChnUi from './components'
app.use(ChnUi)

app.mount('#app')
