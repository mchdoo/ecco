import { createRouter, createWebHistory } from 'vue-router'

import Start from '@/views/Start.vue'
import Editor from '@/views/Editor.vue'

const routes = [
    {path: '/', name: 'Start', component: Start},
    {path: '/editor/:doc', name: 'Editor', component: Editor},
    {path: '/editor', name: 'Edit', component: Editor}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router