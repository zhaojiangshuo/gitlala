import React from 'react';
export default class Item extends React.Component{
    constructor(){
        super()
    }
    render(){
        let style = {
            width:(this.props.ary.length+1)*500+'px',
            transition: 'all 0.3s linear',
            left:(this.props.index)*-500+'px'
        }
        return <ul className="ul" style={style} ref="ul">
            {this.props.ary.map((item,index)=>{
                return <li key={index}><img src={item}/></li>
            })}<li><img src={this.props.ary[0]}/></li>
        </ul>
    }
}