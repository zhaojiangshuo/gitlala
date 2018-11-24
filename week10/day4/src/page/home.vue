//组件的解构
<template>
<div class="box">
  <MHead>头部</MHead>
   <Swiper></Swiper>
   <h3>热门图书</h3>
   <ul>
       <li v-for="(item,index) in hotbooks" :key=index>
           <img :src="item.bookCover" :alt="item.bookInfo">
            <div>{{item.bookName}}</div>
            <div>￥：{{item.bookPrice}}</div>
       </li>
    </ul>
</div>
</template>

//行为加数据
<script>
import MHead from "../base/head.vue";
import Swiper from "../base/swiper.vue";
import { hotbooks } from "../api/ajax.js";
export default {
  created() {
    hotbooks().then(res => { 
      this.hotbooks = JSON.parse(res);
    });
  },
  data() {
    return {
      hotbooks: []
    };
  },
  components: {
    MHead,
    Swiper
  }
};
</script>
//样式一适配带全局，需要加一个属性scoped【表示当前的样式】

<style lang="less" scoped>
.box {
  h3 {
    text-align: center;
    line-height: 50px;
  }
  ul {
    list-style: none;
  }
  ul li {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding: 10px;
    img {
      width: 120px;
    }
  }
}
</style>
