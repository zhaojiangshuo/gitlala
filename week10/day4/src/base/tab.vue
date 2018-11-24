<template>
    <div>
        <div class="foot">
       <router-link to='/home'>
       <i class="iconfont icon-home"></i>
       首页
       </router-link>
       <router-link :to='{name:"mList",params:{title:"列表页"}}'>
       <i class="iconfont icon-plus-listview"></i>
       列表
       </router-link>
       <router-link to='/collect'>
       <i class="iconfont icon-unie601"></i>
       收藏
       </router-link>
       <router-link to='/add'>
       <i class="iconfont icon-gerenzhongxin"></i>
       增加
       </router-link>
       </div>
    </div>
</template>
<script>
export default {

};
</script>
<style lang="less" scoped>
.foot{
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        height: 50px;
        background:rgb(192, 211, 83);
        a{
            flex:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            i{
                font-size:20px;
                color:white;
                
            }
        }
        a:hover i{
          color: red;
        }
        a:hover{
          color: red;
        }
    }
</style>





