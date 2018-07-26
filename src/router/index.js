import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

var routes = []

menus.forEach((item) => {
    item.sub.forEach((sub) => {
        routes.push({
            path: `/${sub.componentName}`,
            name: sub.componentName,
            component: () => import(`@/components/${sub.componentName}`)
        })
    })
})

routes.push({
    path: '/demoList',
    name: 'demoList',
    component: () => import(`@/pages/normal.list/index`)
})
export default new Router({ routes })
