### vue
1.mvvm设计模式：双向数据绑定
2.Object.defineProperty() //get set 这两个方法实现响应式开发
3.v-cloak vue的页面闪烁 [v-cloak]{display:none}
4.vue的指令 v-html v-text v-bind v-on[修饰符 stop prevent self ]=>@ v-once v-if[v-else-is v-else] v-show  v-for[(item,index) in xxx[数组、对象、字符串、数字]]作用域你要循环的标签当中，需要使用key属性对每一个元素进行区分 
5.vue的选项方法:el[元素 $mount]
- methods[一般的入的方法]
- watch[用来监听对应的数据 可以处理异步]
- computed[计算属性:通过数据改变进行触发,属性名需要呈现在页面中,不能处理异步有缓存] [get,set]
- components[注册组件]
  - 全局组件:通过vue这个类进行创建,所有的vue实例都可以使用 全局组件不需要祖册
  - 局部组件:创建、祖册、使用【标签名，驼峰命名法换成短横线命名法】
- data[数据，模板当中的data是一个函数，返回一个对象]
- filter[过滤，需要搭配管道符来使用,将前面的值传入到管道符后面的函数中] 
- directives[自定义指令,值是一个函数，参数1是自己起名的一个元素，参数2是设置的一些参数]
- props[一般存在于组件当中，如果不对父级组件传递进来的数据进行处理，我们一般用数据进行接收即可，否则我们需要对数据进行处理【对数据进行验证】]

6.vue生命周期
- beforeCreate 初始化实例的时候执行的方法，
- Created 这个时候实例可以拿到vue当中的数据data，一般情况下通过data渲染完成发送ajax请求
- beforeMount 实例挂载之前
- mounted 实例挂载之后，由dom异步渲染，不能保证组件加载全部完成，需要搭配$nextTick，进行回调函数的执行
   - $refs:1.通过实例上的属性获取页面上的元素，包括集合[v-for]页面上需要配置ref=xxx 
   - 2.在组件上操作$refs，拿到的是组件的实例，通过组件的实例，拿到组件当中的某个元素、数据、方法.....
- beforeUpdate 在当前实例当中只要有数据改变就会触发当前方法执行
- updated 数据更新结束执行，执行条件，跟beforeUpdate一样
- beforeDestroy 实例卸载之前，组件在component中进行切换会导致这个方法执行，【也可以手动触发执行】
- destroyed 实例卸载后，执行的条件跟beforeDestroy一样

7.实例上的方法
$nextTick //所有元素加载结束执行的方法
$el //当前的挂载元素
$mount //操作当前的挂载元素
$data //当前实例上的数据
$refs //js中操作元素用的，也可以操作组件
$children //实例的子组件
$options //实例上的选项[你设置的]
$parent //父级实例
$watch //通过实例来监听数据
$set //可以设置实例上的一些属性


8.组件 
- <component :is='xxx'>//判断当前的这个component标签用来呈现哪个组件【如果是切换的就导致组件卸载,v-if】
- <transition> //动画属性，可以利用transtion这个标签，让里面的元素展示不同的动画效果，它一般搭配v-show
- <transition-group> //可以在这个标签中，可以使用多个跟标签元素显示动画效果
- <slot name='xxx'> //他是一个组件模板当中的一个插槽，可以用来呈现组件标签中让如其他的标签【通过命名slot属性='xxx'】
- <keep-alive> //将当前标签中的内容【组件】缓存到本地，【组件当中的生命周期不会进行执行】

9.路由
vue-router
var router = new VueRouter({
    routes:[ //路由映射表
        {path:'/home',component:Home} //设置什么路径显示什么组件
        {path:'/home/login',component:Home} //设置二级路径
        {path:'/home/login/:c',component:Home} //设置参数'/home/login/1'
        {path:'/home',children:[
            {path:'login',component:Login} //二级组件路径没有前面的/
        ]}
        {path:'*',redirect:'/home'}//路由重定向
    ]
})
new Vue({router})
// <router-view></router-view> //让组件在这个标签内显示
// <router-link></router-link> //通过这个标签，的路径显示相对应的组件
// router-link //to ='/home' 到达某个页面
// router-link //to = {path:'路径',name:'操作组件的名字',params:{操作的是一个值}}
// this.$router //注册结束之后，我们可以在子组件当中，使用这个方法，根据它提供的方法进行操作//go(-1)【返回上一个页面】 back() replace() push('/list')强制到那个路由
// this.$route //它是一个属性，this.$route.params.c //


10.webpack
打包工具webpack gulp //打包工具，编译工具
所有的JS => bind.js  //dist目录
所有的css => bind.js //bind.js=>style=>css样式放到style标签当中，让页面显示
所有的img=>bind.js //没有设置图片的大小【limit】=> 图片转成二进制 => bind.js;设置了limit => dist目录下重新将图片拷贝过来
//如果要考虑兼容问题
//es6=>es5 //babel-preset-es2015 
//es7=>es5 //babel-preset-stage-0
//loader => js css less 变成一个模块

main.js //import './css'