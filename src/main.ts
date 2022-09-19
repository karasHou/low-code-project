import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import regsitorComponent from '@/lib/registorComponents'


const app = createApp(App)

regsitorComponent(app);

app.mount('#app');
