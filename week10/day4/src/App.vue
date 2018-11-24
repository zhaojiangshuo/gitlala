<template>
   <div>
        <router-view></router-view>
       <Tab></Tab>
   </div>
</template>
<script>
import Home from './page/home.vue'
import List from './page/list.vue' 
import Tab from './base/tab.vue'

 export default{
     data(){
         return{
            msg:'jakshd'
         }
     }, 
    methods:{
            
        },
        components:{
            Home,Tab
        }
 }
</script>
<style>
 a{
     /* text-decoration: none; */
     color: white;
 };
 html,body{
     margin: 0;
     padding: 0;
 };
 ul{
     list-style: none;
 }
</style>