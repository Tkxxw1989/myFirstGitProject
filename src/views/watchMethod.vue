<template>
    <div id="watchMethodDemo">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>{{watchOutcome}}</span> 
    </div>
</template>
<script>
export default{
    name:"watchMethod",
    data(){
        return {
            input:"",
            watchOutcome:""
        }
    },
    watch:{
        input:function(newValue,oldValue){
            this.watchOutcome="the input value has changed from "+oldValue+" to "+newValue+".";
        }
    }
}
</script>