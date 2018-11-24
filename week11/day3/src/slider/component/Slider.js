// 创建了四个组件；其中Slider是集合组件；SliderItem代表每一张图片；SliderDots代表焦点；SliderArrow代表左右箭头；
// 将其他子组件集成到这个大组件中；
import React from "react";
import SliderItem from "./SliderItem"
import SliderDots from "./SliderDots"
import SliderArrow from "./SliderArrow"
// 把当前组件导出；
export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = { index: 0 }
        // 定义一个初始的状态值；当前index代表当前显示图片的索引；
    }
    componentDidMount() {
        this.go();
    }
    trun = (step) => {
        if (this.state.index === 3) {
            this.sliders.style.transitionDuration = "0s"
            this.sliders.style.left = "0px"
            // 强行重绘
            let left = window.getComputedStyle(this.sliders).left;
            this.sliders.style.transitionDuration = "0.5s"
            this.setState({ index: 0 })

        }
        
        if (this.state.index + step === -1) {
            this.sliders.style.transitionDuration = "0s"
            this.sliders.style.left = "-2000px"
            // 强行重绘
            let left = window.getComputedStyle(this.sliders).left;
            this.sliders.style.transitionDuration = "0.5s"
            this.setState({ index: 2 })
            return
        }
        if (this.state.index === 3) {
            this.setState({ index: 1 })
            return
        }
        this.setState({ index: this.state.index + step })
    }
    go = () => {
       
        this.timer = setInterval(() => {
           
            this.trun(1)
        }, 2000)
    }
    getSlider = (x) => {
        this.sliders = x
    }
    render() {

        return <div className="container" onMouseEnter={() => { clearInterval(this.timer) }} onMouseLeave={() => { this.go() }}>
            <SliderItem imgs={this.props.imgs} index={this.state.index} slider={this.getSlider} />
            <SliderDots imgs={this.props.imgs} index={this.state.index} trun={this.trun} />
            <SliderArrow trun={this.trun} />
        </div>

    }
}

