<template>
    <div class="link-btn">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      @click.stop="openWindow(button.url)"
      >{{ button.text }}</el-button
    >
  </div>

</template>
    
<script setup lang='ts'>
    const buttons = [
        { type: 'primary', text: '源代码地址',url:"https://github.com/11477872997/Regular-gadget" },
        { type: 'success', text: '正则学习网站',url:"https://zh.javascript.info/regular-expressions" }
] as const
const openWindow = (url:string) =>{
    window.open(url)
}

</script>
    
<style scoped> 
  .link-btn{
    margin: 10px;

  }
</style>