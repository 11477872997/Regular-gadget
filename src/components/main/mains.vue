<template>
 <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="titleName" name="1">
      <el-button type="primary">校验身份证</el-button>
       <!-- <el-row :gutter="20">
          <el-button type="primary">校验身份证</el-button>
          <el-button type="success">校验手机号码</el-button>
          <el-button type="info">校验中文</el-button>
          <el-button type="warning">校验Email地址</el-button>
          <el-button type="danger">校验域名</el-button>
          <el-button type="primary">校验电话号码</el-button>
          <el-button type="success">校验国内电话号码</el-button>
          <el-button type="info">校验日期格式</el-button>
          <el-button type="warning">校验xml文件</el-button>
          <el-button type="danger">中国邮政编码</el-button>
        </el-row>
       <el-row :gutter="20">
          <el-button type="primary">校验IP-v4地址</el-button>
          <el-button type="primary">校验IP-v6地址</el-button>
          <el-button type="success">校验金额2位小数</el-button>
          <el-button type="success">判断IE的版本</el-button>
        </el-row> -->
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
    return Math.random() * 5;
  }
}
let roum =  new randomNUm();
console.log(roum.getrandom())
console.log(parseInt('1'))
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