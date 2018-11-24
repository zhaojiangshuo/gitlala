import React from 'react';
export default class Button extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="arrow">
            <span className="left" onClick={()=>{this.props.lala(-1)}}>&lt;</span>
            <span className="right" onClick={()=>{this.props.lala(1)}}>&gt;</span>
        </div>
    }
}