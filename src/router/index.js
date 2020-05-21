import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import QuickSort from '../views/QuickSort.vue'
import BubbleSort from '../views/BubbleSort.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quicksort',
    name: 'Quick Sort',
    component: QuickSort
  },
  {
    path: '/bubblesort',
    name: 'Bubble Sort',
    component: BubbleSort
  }
]

const router = new VueRouter({
  routes
})

export default router
