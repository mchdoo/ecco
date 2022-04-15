import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button.vue'

library.add(fas)

createApp(App)
    .use(router)
    .component('fai', FontAwesomeIcon)
    .component('Button', Button)
    .mount('#app')
