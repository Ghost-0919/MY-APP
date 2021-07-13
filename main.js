import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

import reqs from './cloud_sdk/index.js'
import apis from './tools/index.js'

Vue.prototype.$reqs = reqs
Vue.prototype.$apis = apis



Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
