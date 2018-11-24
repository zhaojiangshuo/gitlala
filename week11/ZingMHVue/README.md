- 目前项目规则

项目规则使用esLint配置原则：

```
1、能够帮助发现代码错误的规则，大部分开启
2、配置尽可能寻找最有用的规则，尽可能的合理
3、觉得不合理的规则可以去掉、相反可以添加规则
 
 (所有的规则都加了中文注释/并解释【为什么使用此规则】

虽然看起来规则不少，但大部分是对大家有帮助的辅助检测，大家可以读一下

目前代码风格方面没有过多的限制大家的编程体验。

```
- 其他规则

```

    变量（除const常量）、函数名都使用小写开头驼峰命名 （esLint手动关闭了，因为存在第三方插件本身没有使用驼峰命名的情况，手动关闭）
    Vue的组件命名：需要首字母大写驼峰命名 (应该会逐渐配置到esLint中，先自行遵守)
    组件之间命名：例如 card/下组件名称 应该类似：card/[cardProp]  card/[cardConent] card/[cardMessage]等 以`目录名`+组件名 命名 
    vue大家熟悉之后可能也会根据情况少量指定规则规范写法
    请大家先尝试使用正确使用const和let代替var，以后大家熟悉之后，可能会规范声明方式更加标准（目前没有禁止var的声明方式）

    (部分ide找不到model ： 可能需要 sudo npm i babel-eslint  -g)

```

- 业务页面结构规则

```
container 内模块尽量分两级，尽量不要分三级， 路径名称：
通用的含糊的item child content container  之类的不要加 尽量和业务功能相关如   trello/cards  trello/boards

```

- 具体规则大家可以读一下： [配置文件](http://39.104.73.92:81/dev-team/ZingMHVue/blob/vue-element/.eslintrc.js)


- 项目结构

```
localhost:src Venda-GM$ tree
├── App.vue
├── assets
│   ├── font
│   ├── img
│   └── stylus
├── components
│   ├── Avatar.vue
│   ├── Bubble.vue
│   ├── CopyTempalate.vue
│   ├── GridCard.vue
│   ├── HelloWorld.vue
│   ├── Loading.vue
│   ├── Scroll.vue
│   └── Tag.vue
├── container
│   └── demo
│       └── demo.vue
├── main.js
├── router
│   └── index.js
└── utils
    └── dom.js

```

##   说明

- 业务页面:

目前我们暂时使用目前的项目结构,以后可能随着经验逐渐完善,业务模块功能在`container`文件 : 类似以前门户的文件夹进行模块分层,每个模块建立单独的文件夹。

类似demo : `container/demo/demo.vue`

trello :  `container/trello/index.vue`

- 通用组件:

`components/`内写系统通用组件:类似门户的`header` `zing-grid` 等通用组件


- vue路由、入口:

`router/index.js` : 进行  `vue`路由注册

`main.js` : vue主入口,可以在此简单配置vue

- webpack打包

`build/`: 内文件基本是webpack相关打包配置文件

- 依赖文件:

`package.json` : 类似`maven`的`pom.xml`管理`npm`依赖。可配置 `npm run`启动脚本。
(一键替换淘宝源:`npm install -g cnpm --registry=https://registry.npm.taobao.org`)

- UI库:

`UI`库可以以`vux`为主、`mint-ui`为辅助进行开发。不够的`UI`样式进行讨论。

- Css预编译器:

虽然项目存在`less`预编译器只是是为兼容`vux`， 如果我们需要手写：推荐使用`Stylus`。

- `vue`等前端相关资料

vue2 : https://cn.vuejs.org/v2/guide/

mint-ui : http://mint-ui.github.io/#!/en

vux: https://vux.li/#/

vux-loader : https://vux.li/#/zh-CN/vux-loader

webpack教程 : https://segmentfault.com/a/1190000006843916

lodash工具库 : http://lodashjs.com/

es6廖雪峰教程 : http://es6.ruanyifeng.com/


gitlab runner 会自动测试eslint

## 组件文档

* [组件文档](./src/components/README.md)
* [zingVue规范](./src/container/README.md)


## 注意事项
- 不要一味的复制粘贴，最好关注下组件的实现原理， 比如scroll组件， 比如Scroll组件如果不需要上拉刷新，就别全复制上去
    
- 循环组件或者模板片段时， 一定加上key(用于vue进行diff增量更新)， key为唯一值， 在当前循环作用域不可重复。 如果不做复杂增删改，可以将索引设为key值。如果进行复杂操作，key可以设为当前项的GUID
    
    ```js
        <div v-for="item in data" :key="item.id"></div>
        let data = [
            {
                name: 'John',
                age: 20,
                id: 231zxa2
            },{
                name: 'Nancy',
                age: 22,
                id: 2321xx8
            }
        ]
    ```

- v-bind的使用

  可以用`:`代替， 理解有无v-bind的区别。 
  
  `name="customName"` 此时，双引号内的`customNAme` 为普通字符串。
  
  `:name="customName"` 此时 `customNAme` 为`js语句`。也可写为`:name="custom ? customName : defalutName"`

- es6(箭头函数)
    
    无需再绑定作用域`let that = this` (`Generator`函数除外) 

