
class Element {
    constructor(type,attr,children){
         this.type = type
         this.attr = attr
         this.children = children
    }
    render(){
       let ele = document.createElement(this.type)
       
   }
}

let react={
    createElement(type,attr,...children){
        return new Element()
    } 
}



ReactDOM.render(a,window.root)
let a = React.createElement("div",{a:1,b:2,className:"btn"},"珠峰",React.createElement("span",null,6666));