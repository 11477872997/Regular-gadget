<template>
      <el-dialog v-model="count" title="正则列表" width="50%"  draggable :show-close="false" :fullscreen="false" :close-on-click-modal="false">
            <el-row>
                <el-col :span="24">
                <el-table :data="filterTableData"  height="250" :border="true"  style="width: 100%" >
                    <el-table-column type="expand">
                    <template #default="props">
                        <div m="4">
                            <el-table :data="props.row.family" :border="true">
                                <el-table-column label="字符" prop="name" />
                                <el-table-column label="描述" prop="state" />
                            </el-table>
                        </div>
                    </template>
                    </el-table-column>
                    <el-table-column label="名称" prop="date" />
                    <el-table-column align="right" >
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                 </el-table-column>
                </el-table>
                </el-col>
            </el-row>
            <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="dialogVisible">关闭</el-button
                >
            </span>
            </template>
        </el-dialog> 
</template>

<script setup lang='ts'>
import { defineProps,reactive,computed,ref} from 'vue'
const props = defineProps({
    count: {
        type: Boolean,
        required: true,
    },
})
// 更新父组件传过来的值
const emit = defineEmits(['update:count'])
const dialogVisible:() => void = () =>{
    emit('update:count', !props.count)
}
// 搜索
// 搜索
const search = ref()
let tableData = reactive([{}]);
const filterTableData = computed(() =>{
    if(!search.value){
        return tableData;
    }
      tableData.filter((data :any) => {
        // return data.date
        // data.date.includes(search.value.toLowerCase())
        // console.log( data.date.includes(search.value.toLowerCase()))

        //  data.date.includes(search.value.toLowerCase())
      })

})
//   tableData.filter((data :any) => {
//     if(!search.value){
//        return  data;
//     }
//         //   !search.value ||
//     //   data.name.toLowerCase().includes(search.value.toLowerCase())
//        console.log(!search.value)
//   })
// )

import('../../assets/table1.json').then((res) =>{
    tableData = res.default;
})

</script>
    
<style scoped>
</style>