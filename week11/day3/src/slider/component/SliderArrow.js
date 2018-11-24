
import React from "react";
export default class SliderArrow extends React.Component{
     constructor(){
         super()
     }
     render(){
         return <div className="arrow">
             <span className="left" onClick={()=>{this.props.trun(-1)}}>&lt;</span>
             <span className="right" onClick={()=>{this.props.trun(1)}}>&gt;</span>
         </div>
     }
}