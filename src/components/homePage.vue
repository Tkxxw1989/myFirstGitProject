<template>
    <div>
        <div>
        系统登陆
        <router-link to="foo">go to helloWorld</router-link>
        <router-link to="secondRouter">go to secondLevel</router-link>
        </div>
        <div>
        <el-button @click="gotoOnlineMonitor">在线监测</el-button>
        <el-button @click="gotoDataAnalysis">数据处理分析</el-button>
        <el-button @click="gotoSystemManagement">系统管理</el-button>
        <router-view></router-view>
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

            },
            gotoSystemManagement(){
                
            }
        }
    }
</script>