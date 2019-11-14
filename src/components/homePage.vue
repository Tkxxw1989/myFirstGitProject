<template>
    <div>
        <div class="makeItCenter selectModule">
            丹江口大坝安全监测信息系统
        </div>
        <div class="makeItCenter">
        <el-button @click="gotoOnlineMonitor">在线监测</el-button>
        <el-button @click="gotoDataAnalysis">数据处理分析</el-button>
        <el-button @click="gotoSystemManagement">系统管理</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'homePage',
        methods:{
            gotoOnlineMonitor(){
                this.$router.push({path:"onlineMonitor"});
            },
            gotoDataAnalysis(){
                this.$router.push({path:"dataAnalysis"});
            },
            gotoSystemManagement(){
                
            }
        }
    }
</script>
<style lang="scss" scoped>
.makeItCenter{
    text-align: center;
}
.selectModule{
    margin-top:20px;
    margin-bottom: 20%;
}
</style>