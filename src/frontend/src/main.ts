import { createApp } from 'vue';
import App from './views/App.vue';
import { router } from './router';

import './styles/global.scss'; // 🌸 central styles imported here

createApp(App)      // ← App.vue is the root component
    .use(router)      // ← attach Vue Router
    .mount('#app');   // ← mount it to <div id="app">
