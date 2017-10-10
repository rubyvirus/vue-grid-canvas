import Vue from 'vue'
import Router from 'vue-router'
import Simple from '@/components/Simple'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Simple',
            component: Simple,
        },
    ],
})
