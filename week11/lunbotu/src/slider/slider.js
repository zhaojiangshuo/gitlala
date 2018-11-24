import React from 'react';
import Item from './item';
import Button from './button';
import Yuandian from './yuandian';
export default class Slider extends React.Component{
    constructor(){
        super()
        this.state={index:0}
    }
    componentDidMount(){
        this.go()
    }
    lala=(step)=>{
        let ul = this.refs.ul.refs.ul;
        if(this.state.index===3){
            ul.style.transitionDuration= '0s'
            ul.style.left = '0px';
            let left = getComputedStyle(ul).left
            ul.style.transitionDuration= '0.3s'
            this.setState({index:0})
        }
        if(this.state.index+step===-1){
            ul.style.transitionDuration= '0s'
            ul.style.left='-1500px'
            let left = getComputedStyle(ul).left
            ul.style.transitionDuration= '0.3s'
            this.setState({index:2})
            return
        }
        if(this.state.index===3){
            this.setState({index:1})
            return
        }
        this.setState({index:this.state.index+step})
    }
    go=()=>{
        this.timer = setInterval(()=>{
            this.lala(1)
        },2000)
    }
    render(){
        return <div className="box" onMouseEnter={()=>{clearInterval(this.timer)}}         onMouseLeave={this.go}>
          <Item ary = {this.props.ary} index={this.state.index} ref="ul"/>
          <Button lala = {this.lala}/>
          <Yuandian index={this.state.index} ary={this.props.ary}/>
        </div>
    }
}