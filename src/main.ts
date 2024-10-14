import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import HelloPage from '@/views/HelloPage.vue'

const routes = [
  {
    path: '/',
    component: HelloPage
  },
]

const app = createApp(App)
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.mount('#app')
