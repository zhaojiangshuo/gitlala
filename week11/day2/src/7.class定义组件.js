import React from 'react'
//在导入React是一个对象；对象中有个Component属性；属性值是一个类；
import ReactDOM from 'react-dom'
//类定义组件；
// 1.需要继承Component这个类；
// 2.需要在类的原型上添加render方法
// 3.render函数一定要有return；
// 4.一般返回一个顶级的React元素；
class Fn extends React.Component{
     constructor(){
         super();
         console.log(this);
     }
     render(){
         console.log(this);
        //  这个render是通过实例进行调用的；
        // this.props.a = 100;
        // props传递过来的属性不能进行修改；react单项数据流
         return <div>{this.props.a}</div>
     }
}
// 类声明的组件有状态有this有生命周期
// 函数声明的组件没有状态 没有this 没有生命周期
// 
ReactDOM.render(<Fn a="1"/>,window.root)
// render:
// 如果判断当前是一个类组件，首先会把行间属性打包成一个对象传给这个组件类
// 1.那么会立即创建这个类的实例；new Fn({a:1})；constructor执行完成后，将传递进来的数据放到实例的props属性上；
// 2.通过实例调用了原型上的render函数；让其执行把render函数的返回值转换成真实的DOM，并且插入到根元素中；
// 