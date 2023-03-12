import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import './assets/styles/index.scss';
import './assets/fonts/index.scss';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia).mount('#app');
