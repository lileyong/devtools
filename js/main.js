import Vue from "vue"
import App from "../views/app.vue"
import "../css/main.styl"

let root = document.createElement("div")
document.body.append(root)

let vm = new Vue({
    render:(h) => h(App)
}).$mount(root)