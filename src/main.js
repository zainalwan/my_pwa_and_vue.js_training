import { createApp } from 'vue';
import PWA from './PWA';
import App from './components/App/App.vue';

PWA.init();
createApp(App).mount('#app');
