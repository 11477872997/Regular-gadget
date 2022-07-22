<script setup lang="ts">
import headers from '@/components/header/headers.vue'
import mains from '@/components/main/mains.vue'
</script>

<template>
   <div class="common-layout">
      <el-container>
         <el-header>
            <headers />
         </el-header>
         <el-main>
            <mains />
         </el-main>
         <el-footer>
           
         </el-footer>
      </el-container>
   </div>
</template>
<style scoped>
.el-header {
   height: auto;
}
</style>
