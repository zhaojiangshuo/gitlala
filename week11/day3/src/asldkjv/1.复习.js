import React from "react";
import ReactDOM from "react-dom";
let a = <div id="box">123</div>
let box = document.getElementById("box")//只能获取上下文是document上下文的元素
//由于元素没有放入真实的DOM中，所以获取结果为null
//组件
// 1.function 
// 2.class 
class Con extends React.Component{
constructor(){
super();
}
render(){
return <div>{this.props.h}</div>
}
}
ReactDOM.render(<Con h='zf'/>,document.querySelector("#root"),function(){
  let box = document.getElementById("box")
  console.log(box);
})
;