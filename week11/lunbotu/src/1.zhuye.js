import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import a from './hehe.jpg';
import b from './heihei.jpg';
import c from './lalal.jpg';
import './css.css'
let ary = [{ src: a }, { src: b }, { src: c }]
class Moust extends Component {
    constructor() {
        super();
        this.state = {
            cc: 0
        }
    }
    go=()=>{
         this.timer = setInterval(() => {
                this.change()
            }, this.props.lazytime)
    }
    componentDidMount() {
        if (this.props.autoplay) {
           this.go()
        }
    }
    change = () => {
        let cc = this.state.cc + 1
        if (cc > ary.length) {
            console.log(this.refs.ol);
            let ul = this.refs.ol;
            ul.style.transition = '';
            ul.style.left = 0 + 'px';
            setTimeout(() => {
                ul.style.transition = this.props.sd+'s';
                cc = 1
                this.setState({
                    cc: cc   
                })
            }, 30)
            return
        }
        this.setState({
            cc:cc
        })
    }

    nhuij=()=>{
        clearInterval(this.timer)
    }

    nhuji=()=>{
       this.go()
    }

    rightt=()=>{
       
    }

    leftt=()=>{
       
    }

    render() {

        let cur = {
            width: (ary.length + 1) * 500 + 'px',
            left: this.state.cc * -500 + 'px',
            transition: `all ${this.props.sd}s linear`
        }

       

        return <div onMouseEnter={()=>{this.nhuij()}} onMouseLeave={()=>{this.nhuji()}} className="lunbo">
         <span onClick={()=>{this.leftt()}} className="left">&lt;</span>
         <span onClick={()=>{this.rightt()}} className="right">&gt;</span>
            <ul style={cur} ref="ol">
                {ary.map((item, index) => (
                    <li key={index}><img src={item.src} />
                    </li>
                ))}<li><img src={ary[0].src} /></li>
            </ul>
        </div>

    }
}
ReactDOM.render(<Moust autoplay={true} lazytime={1000} sd={0.2} />, window.root)