import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


// initiate app
import {createApp} from 'vue';
// import router
import router from './router';
// import component
import CompaniesIndex from './components/companies/CompaniesIndex';

createApp({
    components: { 
        CompaniesIndex 
    }
    
}).use(router).mount('#app')