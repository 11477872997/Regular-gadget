<template>
 <div class="demo-collapse">
    <el-collapse  accordion>
      <el-collapse-item title="数字效验正则" name="1" >
        <template v-for="item in users" >
               <el-button  :color="roum.getrandom()"  v-if="item.name ==='figure'" :key="item.id" @click.stop="onThat(item.refular)">{{item.text}}</el-button>
            </template>
      </el-collapse-item>
      <el-collapse-item title="字符效验正则" name="2">
          <template v-for="item in users" >
              <el-button :color="roum.getrandom()"  v-if="item.name ==='character'" :key="item.id" @click.stop="onThat(item.refular)">{{item.text}}</el-button>
            </template>
      </el-collapse-item>
      <el-collapse-item title="特殊需求正则" name="3">
          <template v-for="item in users" >
              <el-button :color="roum.getrandom()"  v-if="item.name ==='special'" :key="item.id" @click.stop="onThat(item.refular)">{{item.text}}</el-button>
            </template>
      </el-collapse-item>
    </el-collapse>
    <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content ep-bg-purple" />
             <el-input v-model="regularValue" placeholder="选择上面提供的正则" clearable />
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input v-model="contentValue" placeholder="输入要匹配的内容是否正确" clearable /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
           <el-button type="primary" @click.stop="result">匹配结果</el-button>
        </el-col>
      </el-row>
  </div>
</template>
<script setup lang='ts'>
 import {ref } from 'vue'
 // 正则输入框
let regularValue = ref();
let contentValue = ref();
    //  生成随机类型
    class randomNUm{
      getrandom(){
         let color = "#";
         for (let i = 0; i < 6; i++){
          let num:any = Math.random() * 16;
           color += parseInt(num).toString(16);
         } 
        return color;
      }
    
    }
    let roum =  new randomNUm();
    // 获取按钮数据
    const users = ref();
    import('../../assets/btn.json').then((res) =>{
      users.value = res.default;
    })
// 获取当前正则
 const onThat = (refular:string)=>{
    regularValue.value = refular;
  } 
// 匹配结果
const result = () =>{
  regularValue.value.test(contentValue.value)
    console.log(regularValue.value)
    console.log(contentValue.value)
    console.log( regularValue.value.test(contentValue.value))
}

</script>
    
<style scoped>
.el-button,.el-row{
  margin: 10px;
}
</style>