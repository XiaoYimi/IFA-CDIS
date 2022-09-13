import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { installModules } from '@/cores/autoload/index';

const app = createApp(App);
installModules(app);
app.mount('#app');
