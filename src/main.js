
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import App from './App.vue'
import router from './router';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

const app = createApp(App)

app.use(ConfirmationService);
app.use(PrimeVue);
app.use(createPinia())
app.use(router)
app.use(ToastService);
app.mount('#app')
