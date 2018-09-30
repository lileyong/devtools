import Vue from "vue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from "../views/app.vue"
import "../css/main.styl"

Vue.use(ElementUI)

let root = document.createElement("div")
document.body.append(root)

let vm = new Vue({
    render:(h) => h(App)
}).$mount(root)