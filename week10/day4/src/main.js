// alert('打包成功')
// import sum from './a.js';

// let a = sum('1',2,3,4,5);
// console.log(a);

// let c = b=>d=>e=>b+d+e;
// let x = c(1)(2)(3);
// console.log(x);

// document.write('123')

//通过es6的模块导入导出来引入vue文件
import Vue from 'vue'
//vue分为2个部分，一个runtime 
// 必须要用一个函数 render:function(){}
// 另外一个是complair.，vue实例上的 解析 template
import App from './App.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
//router
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// import Home from './page/home.vue';
// // import Tab from './page/tab.vue';

// let routes = [
//     {path:'/home',component:Home},
//     {path:'/tab',component:Tab}
// ];
// let router = new VueRouter({
//     routes,
// })
import router from './router'
new Vue({
    el:'#app',
    render:h=>h(App),
    router
})
