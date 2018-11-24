import React from "react";
import ReactDOM from "react-dom";
// 状态：是组件自己私有的；是可以更改的；
// props:属性
// state:私有的状态；
class Dev extends React.Component{
    constructor(){
        super()
        // 一般会在constructor中定义状态
        this.state = {count:100}
    };
// 在类的原型上定义事件行为的方法；
     add=()=>{
        //  this.setState = 9
         console.log(this);
       // setState: 是对当前组件状态修改的唯一方法；并且可以调用render方法重新执行从而让视图下新
    //    this.state = 8
    //    this.setState({count:20})
    //    this.setState({count:this.state.count+1})
    // this.setState((prve)=>({count:prve.count+1}))
    // this.setState((prve)=>({count:prve.count+3}))
        this.setState({count:this.state.count+1},function(){
            this.setState({count:this.state.count+2})
        })
     }
    render(){
        console.log('render');
        // console.log(this); //状态state
        // this.state.count = 1000;
        return <div>
        <p>{this.state.count}</p>
        <button onClick={this.add}>+</button>
        </div>
    }
}
// react中的事件绑定
// 1.事件行为遵循驼峰命名；
// 2.事件行为的属性值大括号中不能为空
ReactDOM.render(<Dev/>,document.querySelector("#root"))