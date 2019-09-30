import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from 'src/App.vue'
import 'src/css/main.styl'

Vue.use(ElementUI)

const root = document.createElement('div')
document.body.append(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)
