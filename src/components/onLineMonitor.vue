<template>
    <div>
        <div class="moduleTitle">
            <img src="../assets/images/lgoo.png" alt="">
        </div>
        <div class="moduleContent">
            <div class="menuList">
            <div class="eachModule" @click="gotoOnlineHome">首页</div>
            <div class="eachModule" @click="gotoTransfusion">渗流渗压</div>
            <div class="eachModule" @click="gotoStress">应力应变</div>
            <div class="eachModule" @click="gotoEnvironmentInfo">环境量信息</div>
            <div class="eachModule" @click="gotoEarthQuake">强震监测</div>
            <div class="eachModule" @click="gotoCollectControl">采集控制</div>
            <div class="eachModule" @click="gotoInspection">巡视检查</div>
            <div class="eachModule" @click="gotoVideoMonitor">视频监控</div>
            </div>
            <div class="currentModule">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"onlineMonitor",
        methods:{
           gotoOnlineHome(){
               this.$router.push("/onlineMonitor");
           },
           gotoCollectControl(){
                this.$router.push("/onlineMonitor/collectControl");
           },
           gotoTransfusion(){

           },
           gotoStress(){

           },
           gotoEnvironmentInfo(){

           },
           gotoEarthQuake(){

           },
           gotoInspection(){

           },
           gotoVideoMonitor(){

           }
        }
    }
</script>
<style lang="scss" scoped>
    .moduleTitle{
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        background-color: #0d1e3c;
        color: #fff;
        img{
            height:28px;
            vertical-align: middle;
        }
        margin-bottom: 5px;
    }
    .moduleContent{
        height:calc(100vh - 55px);
        .menuList{
        height:100%;
        width:100px;
        background-color: #1e66dc;
        color:#fff;
        float: left;
        display:flex;
        flex-direction: column;
    }
    .currentModule{
        height: 100%;
        padding-left: 10px;
        background-color: #f0f3fc;
        margin-left: 100px;
    }
    .eachModule{
        text-align: center;
        margin-top:10px;
        margin-bottom: 10px;
        cursor: pointer;
        flex:auto;
    }
    }
    
</style>

