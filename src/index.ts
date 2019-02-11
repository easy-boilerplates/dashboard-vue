import { Layout } from 'layouts'
import { router } from 'routes'
import 'theme'
import Vue from 'vue'


// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  render: h => h(Layout)
})
.$mount('#root')
