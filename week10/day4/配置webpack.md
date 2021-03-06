

### webpack

> webpack是一个编译语言和打包工具
> 在项目当中，我们可以将所有的文件【css、js、img...】最后打包成一个文件，直接引入到html文件中，最后上线的代码也是这个文件，[filezile通过web服务将最后打包好的文件推送到服务器当中]

> 编译语言：es6 、es7编译成es5 、 es3 供低版本浏览器运行，webpack会结合模块babel，降版本进行翻译。

> 这些文件都需要安装，都需要在webpack.config.js文件当中进行配置

> 最后，我们利用命令【webpack】，将我们写的项目进行打包【打包的时候会到配置当中去找相对应的编译模块】，

### webpack打包过程
1.首先我们需要通过node安装一个本地的模块webpack，在模块清单当中配置即将要执行的打包命令【script=> build:webpack】
2.当我们执行命令的时候，我们去node_modules下面找webpack这个第三方模块，执行里面相对应的打包命令，并且会去找【开发设置的打包配置的参数，文件=> webpack.config.js】
3.如果我们有需要去编译高版本语言，或者其它的操作，我们还需通过node安装相对应的第三方模块，
4.当webpack打包的时候，会将第三方模块编译好的文件/或者翻译好的文件，进行合并\压缩，并且输出到指定的目录下面
5.最后上线的就是我们打包好的文件

### 安装webpack
```
npm install webpack@3.8.1 --save -dev
```

### nrm代理
```
npm install nrm -g
nrm ls //查看代理列表
nrm use xxx //切换原代理
npm install xxx //这时候安装就属于你切换后的源安装的
```

### yarn 包管理器
```
安装yarn npm install -g yarn
安装模块 yarn add xxx
  开发环境：--dev
跑环境 yarn install
卸载模块： yarn remove xxx
执行脚本： yarn build
特点：熟度非常快