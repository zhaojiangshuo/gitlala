import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Cond extends Component {
    constructor() {
        super();
        this.state = {
            width: "100px",
            height: "100px",
            background: "red",
            position: "absolute",
            left: "0px",
            top: "0px",
        }
    }
    change = (e) => {
        let cur = e.target;
        let l = cur.offsetLeft;
        let t = cur.offsetTop;
        let mx = e.clientX;
        let my = e.clientY;
        document.onmousemove=(e)=>{
            let c = e.clientX - mx + l ;
            let b = e.clientY - my + t;
              this.setState({
                left:c+'px',
                top:b+"px"
            }) 
        }
    }
    removeC=()=>{
       document.onmousemove = null
    }
    render() {
        return <div>
            <div onMouseDown={ this.change } onMouseUp={()=>{this.removeC()}} style={{ ...this.state }}/>
            </div>
       
    }
}


ReactDOM.render(<div><Cond/><Cond/></div>, document.querySelector('#root'))
