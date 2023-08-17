import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    name: 'ShowComponent',
    path: '/',
    redirect: '/ShowForm',
    component: () => import('@/views/Layout'),
    meta: { title: '组件展示', icon: 'el-icon-location'},
    children: [
      {
        name: 'ShowForm',
        path: 'ShowForm',
        component: () => import('@/views/showComponent/showForm'),
        meta: { title: '表单展示', icon: 'el-icon-location'}
      }
    ]
  }
]

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

