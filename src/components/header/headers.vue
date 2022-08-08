<template>
       <el-carousel :interval="4000" type="card" height="300px" @change="changePandT" loop> 
              <el-carousel-item v-for="item in arr" :key="item.id" >
                <a :href="item.url" target="_blank"><img :src="item.src" :alt="item.url"  /></a>
              </el-carousel-item>
       </el-carousel>
</template>
    
<script setup lang='ts'>
//  x渲染数据
    let arr: any [] = [
        {id:'1',src:new URL('../../assets/a.png', import.meta.url).href,url:'https://www.cnblogs.com/zxh-bug'},
        {id:'2',src:'https://www.dmoe.cc/random.php',url:'https://www.cnblogs.com/zxh-bug'},
        {id:'3',src:'https://www.dmoe.cc/random.php',url:'https://www.cnblogs.com/zxh-bug'}
       ];
function changePandT(index :any) {
       (index == 0) ?arr[index].src = new URL('../../assets/a.png', import.meta.url).href:arr[index].src = 'https://www.dmoe.cc/random.php?time='+new Date();  
}
</script>
    
<style scoped>
img{
  width: 70%;
  height: 100%;
}
</style>