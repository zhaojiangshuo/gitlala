import React from 'react';
export default class Yuandian extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <ul className="dian">
        {this.props.ary.map((item,index)=>{
            return <li key={index} className={this.props.index===index||this.props.index-index===this.props.ary.length?'active':''}></li>
        })}
        </ul>
    }
}