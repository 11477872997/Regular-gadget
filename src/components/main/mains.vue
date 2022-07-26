<template>
 <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="titleName" name="1">
        <el-row :gutter="20">

        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
   
</template>
    
<script setup lang='ts'>
 import { ref } from 'vue'
 const titleName = '常用的正则'
//  生成随机类型
class randomNUm{
  arrlist: Array<string> = ["primary","success","info","warning","danger"];
  getrandom(){
    return this.arrlist[Math.round(Math.random()* 4)]
  }
}
let roum =  new randomNUm();
// 获取按钮数据


const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>
    
<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>