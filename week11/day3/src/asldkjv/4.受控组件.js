import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class User extends Component{
constructor(){
super();
this.state = {number:100}
}

change=(e,m)=>{
//    受控组件如果想更改内容必须通过更改状态来影响内容；
//    当事件触发的时刻，那么事件对象是存在的，当前方法执行完成，那么会被赋默认值null
//    受控组件一般是针对表单元素的；
console.log(e);

this.setState({number:e.target.value})
}
render(){
    // 组件依赖于状态；
return <div>
    <input type="text" value={this.state.number}onChange={()=>{this.change(window.event,5)}}/>
     <span>{this.state.number}</span>
</div>
}
}
ReactDOM.render(<User/>,window.root)