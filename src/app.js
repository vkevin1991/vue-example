import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

console.log(AppLayout)

const app = new Vue({
  render: createElement => createElement(AppLayout)
})

export { app }
