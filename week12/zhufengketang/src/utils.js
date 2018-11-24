// 下拉刷新
export function downFresh(ele,callback){
     ele.addEventListener('scroll',function(){
         let scrollT = ele.scrollTop;
         let winH = document.body.clientHeight-110;
         let eleH = ele.offsetHeight;
         if(scrollT+winH+10>eleH){
             callback()
         }
     })
}