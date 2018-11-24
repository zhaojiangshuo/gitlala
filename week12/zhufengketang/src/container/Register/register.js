import React, { Component } from 'react';
import img from '../../images/profile.png';
import {Link} from 'react-router-dom';
import './index.less'
export default class Register extends Component {
    constructor() {
        super();
    }
    render() {
        return <div className="login">
            <div className="login-header">
                <i className="iconfont icon-fanhui"></i>
                注册
            </div>
            <div className="login-photo">
                <img src={img} alt="" />
            </div>
            <ul className="form">
            <li><input type="text" placeholder="请输入用户名"/></li>
            <li><input type="text" placeholder="请输入密码"/></li>
            <li><span className="go"><Link to="/login">前往登录</Link></span></li>
            <li><button>注册</button></li>
            </ul>
        </div>
    }
}