import './assets/main.css'


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faSkype } from '@fortawesome/free-brands-svg-icons';

// Register FontAwesome icons globally
library.add(faFacebook, faInstagram, faSkype);

// Create the Vue app instance
const app = createApp(App);

// Use Vue Router
app.use(router);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the Vue app
app.mount('#app');
