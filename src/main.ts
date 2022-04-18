import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button.vue'
import {GlobalCmComponent} from 'codemirror-editor-vue3'

library.add(fas)

createApp(App)
    .use(router)
    .use(GlobalCmComponent, { componentName: 'codemirror' })
    .component('fai', FontAwesomeIcon)
    .component('Button', Button)
    .mount('#app')