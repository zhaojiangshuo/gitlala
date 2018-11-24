import React from "react";
import store from "../store/index"
import action from "../store/action/todo"
export default class Todo extends React.Component{
    constructor(){
        super()
        this.state=store.getState().todo
    }
    lala=(e)=>{
        if(e.keyCode===13){
            store.dispatch(action.move(e.target.value))
        }
        
    }
    componentDidMount(){
        console.log(store.getState().todo.todo);
        store.subscribe(()=>{
            this.setState({todo:store.getState().todo.todo})
        })
    }
    render(){
        console.log(store.getState().todo);
        return <div>
            <input type="text" onKeyUp={this.lala}/>
            {store.getState().todo.todo.map((item,index)=>{
                return <li key={index}>{item}<button>删除</button></li>
            })}
        </div>
    }
}
