import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // تأكد من استيراد الـ store
import router from './router'; // إذا كنت تستخدم Vue Router

const app = createApp(App);
app.use(store); // تأكد من استخدام الـ store هنا
app.use(router); // إذا كنت تستخدم Vue Router
app.mount('#app');
