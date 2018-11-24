<template>
    <div>
        <MHead :title="listTitle"></MHead>
        <div class="conten">
            <ul class="list">
                <li v-for="(item,index) in books" :key="index">
                    <img :src="item.bookCover" :alt="item.bookInfo">
                    <div class="right">
                        <h4>{{item.bookName}}</h4>
                        <div>{{item.bookPrice}}</div>
                        <button @click="collect(item)">收藏</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MHead from "../base/head.vue";
import {hotbooks,collectbook} from "../api/ajax.js";
export default {
   created(){
            hotbooks().then(res=>{
                this.books = JSON.parse(res);
            })
        },
        data(){
            return{
               books:[] ,
               listTitle:this.$route.params.title
            }
        },
        components:{
            MHead
        },
        methods:{
            collect(item){
                collectbook(item)
            }
        }
    }
</script>
<style scoped lang='less'>
.list {
  list-style: none;
  li {
    margin-top: 15px;
    box-sizing: border-box;
    padding: 5px;
  }
  img {
    width: 30%;
  }
  .right {
    float: right;
    width: 55%;
    // text-align: left;
    line-height: 30px;
    font-size: 15px;
  }
}
</style>


