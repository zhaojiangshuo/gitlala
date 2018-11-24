
import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../page/home.vue';
import List from '../page/list.vue'
import Collect from '../page/collect.vue'
import Add from '../page/add.vue'
let routes = [
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/list',component:List,name:'mList'},
    {path:'/collect',component:Collect},
    {path:'/add',component:Add},
    {path:'*',redirect:'/Home'},    
];
let router = new VueRouter({
    routes,
})
export default router