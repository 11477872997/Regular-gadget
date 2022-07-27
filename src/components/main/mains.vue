<template>
 <div class="demo-collapse">
   <modeview/>
    <el-collapse  accordion>
      <el-row :gutter="20">
        <el-col :span="12">
             <el-input v-model="regularValue" placeholder="选择下面提供的正则" clearable  autofocus />
        </el-col>
        <el-col :span="6">
            <el-input v-model="contentValue" placeholder="输入要匹配的内容是否正确" clearable  /></el-col>
        <el-col :span="6">
           <el-button type="primary" @click.stop="result">匹配结果</el-button>
           <el-button type="success" @click.stop="open">正则列表</el-button>
        </el-col>
      </el-row>
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
      <div v-show="falg">
           <openmode ></openmode>
      </div>
  </div>
</template>
<script setup lang='ts'>
import modeview  from '../modeview/modeview.vue';
import openmode  from '../openmode/openmode.vue';
 import {ref } from 'vue'
 import { ElMessage } from 'element-plus'
 // 正则输入框
let regularValue = ref();
let contentValue = ref();
let falg = ref(false);
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
  if( regularValue.value ==  '' || regularValue.value == undefined){
      hint.loseHint('选择下面提供的正则');
      return false;
  };
  if( contentValue.value ==  '' || contentValue.value == undefined){
      hint.loseHint('请输入要匹配的内容是否正确');
      return false;
  };
  let re = new RegExp(regularValue.value);
  re.test(contentValue.value)?hint.succeedHint('验证成功！'):hint.loseHint('验证失败！');
}
// 提示
class gethint{
    succeedHint(name :string){
      ElMessage({
        message: name,
        type: 'success',
    })
    };
    loseHint(name :string){
       ElMessage.error(name)
    };
}
let hint = new gethint();
// 正则列表
const open = ()=>{
  falg.value?falg.value =false:falg.value=true;
}

</script>
    
<style scoped>
.el-button,.el-row{
  margin: 10px;
}
.el-col{
  line-height: 50px;
}
</style>