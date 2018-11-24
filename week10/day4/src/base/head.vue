<template>
    <div class="header">
        {{title}}
         <slot></slot>
    </div>
</template>
<script>
export default {
    props:['title']
}
</script>
<style lang="less" scoped>
   .header{
       color: #fff;
       background: #555;
       text-align: center;
       height: 50px;
       line-height: 50px;
       font-size: 20px;
   }
</style>


