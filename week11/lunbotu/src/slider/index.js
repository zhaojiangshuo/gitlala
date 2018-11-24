import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider';
import './lala.css';
import a from './images/1.jpg';
import b from './images/2.jpg';
import c from './images/3.jpg';
let ary = [a,b,c]
class Index extends Component{
constructor(){
super();
}
render(){
return <Slider ary={ary}/>
}
}
ReactDOM.render(<Index/>,window.root)