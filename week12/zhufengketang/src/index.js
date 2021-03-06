import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./container/App.js";
import Home from "./container/Home/Home"
import Lesson from "./container/Lesson/Lesson"
import Profile from "./container/Profile/Profile";
import Login from './container/login/login';
import Register from './container/Register/register';
import store from "./store/index"
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/lesson"  component={Lesson}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </App>
        </Provider>
    </Router>,
document.querySelector("#root"))

