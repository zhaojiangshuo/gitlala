/* 
for Each
map
for in
for of
filter
includes
find
some
every
reduce
*/

 var ary = [10,5,9,7,6,2,6,55];
//ary.forEach() 

//map 将回调函数的返回值组成一个新的数组
//for of 遍历数组
/* for(var item of ary){
    console.log(item);//item对应是ary中的每一项
} */
//直接遍历对象会报错，我们可以调用方法【Object.keys()】解决
/*  var obj = {name:'zf',age:8}
console.log(Object.keys(obj)); 
for(var item of Object.keys(obj)){
    console.log(item,age);
} */
//filter 过滤：将符合条件的值放到新的数组当中
//1.遍历数组2.将符合回调函数返回值的内容【判断为true】放入一个新的数组当中
//原数组不会发生改变
/* var newAry = ary.filter((item,index)=>{
return item>5
})
console.log(newAry); */
//ineludes 判断数组当中是否有某项 有=>true 否=>false
/* var newAry = ary.includes('5')
console.log(newAry); */
//find 查找 => 找到符合条件的值并返回
//1.遍历数组 2.判断回调函数返回值的布尔值，返回true，停止遍历 直接将这个值【遍历数组当前项的值】返回
/* var newAry = ary.find((item,index)=>{
    return item>6
})
 console.log(newAry); */
 // some 找true => 遍历数组中如果回调函数返回值计算为true，停止遍历，整体返回true，全部遍历后都没有返回true，整体返回为false
 /* var newAry = ary.some((item,index)=>{
     return item>10
 })
 console.log(newAry); */
 //every 找false=>1.遍历数组，2.如果回调函数返回值计算结果为false，整体返回false停止遍历，整体返回false
 //如果计算结果为true，继续进行遍历，【当遍历结束后，全部返回为true的话，整体返回true】，知道找到false；否则为true
 //reduce 返回两次计算后的结果
 //1.遍历数组 2.将回调函数返回值作为第一次的计算结果，
 //prev[初始值=>第一项的值，当循环的二次的时候，就是计算后的结果],
 //next[数组第二项，从第二项一次向后获取],
 //index[next代表值所对应的索引],
 //input[当前数组]
 //遍历 ary.length-1 次
 //1.prev=>4 next=》5 index =》1 //这一次的计算结果 return xxx【对应=》prev值】
 //调用reduce内置的方法可以实现数组中含有对象求和的操作，reduce第二个参数
 var newAry = ary.reduce((prev,next,index,item)=>{
     var cur = (prev+next);
     return cur
 })
 console.log(newAry);