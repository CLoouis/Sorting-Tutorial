import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BubbleSort from '@/components/BubbleSort'
import MergeSort from '@/components/MergeSort'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

const routes = {
  '/': App,
  '/BubbleSort': BubbleSort,
  '/MergeSort': MergeSort
}

const NotFound = { template: '<p>Page not found</p>' }

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
