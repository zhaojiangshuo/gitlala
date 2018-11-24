import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class User extends Component{
constructor(){
super();
this.state={sum:0}
}
changeSum=()=>{
    // 这个函数利用了冒泡传播；触发div身上的onChange事件；
    // console.log(100);
    //  console.log(this.refs.a);
     this.setState({sum:Number(this.refs.a.value)+Number(this.refs.b.value)})
    //  1.获取元素的方法；给当前元素加上ref属性，当前元素就会挂载到当前实例的refs属性上；this.refs.a
    // 2.ref接收一个函数，并且函数第一个参数代表当前的元素
    console.log(this.b);
    
}
render(){
return <div onChange={this.changeSum}>
    <input type="number" ref="a"/> +
    <input type="number" ref="b"/> =
    {this.state.sum}
</div>
}
}

ReactDOM.render(<User/>,window.root)