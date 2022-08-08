<template>
      <el-dialog v-model="count" title="正则列表" width="50%"  draggable :show-close="false" :fullscreen="false" :close-on-click-modal="false">
            <el-row>
                <el-col :span="24">
                <el-table :data="filterTableData"  height="100%" :border="true"  style="width: 100%" >
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
                    <el-table-column label="名称" prop="name" />
                    <el-table-column align="right"  prop="state" >
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
import { map } from 'lodash';
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
const search = ref()
let tableData = reactive([{}]);
const   filterTableData = computed(() =>{
    if(!search.value){
        return tableData;
    }else{
        return cx(search.value.toLowerCase(),tableData) ;
    }
})

// 递归查询
const cx =  function(value:string,list:Array<any>){
    let newArr:Array<any> = [];
        if(list && list.length){
            list.filter( v =>{
                if(v.family && v.family.length){
                let ab = cx(value,v.family);
            // 递归查询
                if(ab && ab.length){
                     newArr.push({...v});
                }
                }else{
                    let alist = Object.values(Object.fromEntries(Object.entries(v).filter(item => true)))
                    alist.some((items:any) =>{
                        if(items.includes(value)){
                            newArr.push(v);
                        }
                    })
                }
                
            })
        }
    return newArr;
}

class searchlist{
    /**
     * arr 需要处理的对象数组
     * query 模糊查询参数
     */
   public search(arr:Array<object>,query:string){
        return arr.filter(e =>{
            
        })
    }
}
let searchlis = new searchlist()

import('../../assets/table1.json').then((res) =>{
    tableData = res.default;
})

</script>
    
<style scoped>
</style>