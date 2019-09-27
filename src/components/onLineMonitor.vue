<template>
    <div>
        <div class="moduleTitle">
            <img src="../assets/images/lgoo.png" alt="">
        </div>
        <div class="moduleContent">
            <div class="menuList">
            <div class="eachModule" @click="gotoOnlineHome">首页</div>
            <div class="eachModule" @click="gotoTransfusion">调用子组件</div>
            <div class="eachModule" @click="gotoStress">watch方法Demo</div>
            <div class="eachModule" @click="gotoIviewSiderBar">iview侧边栏Demo</div>
            <div class="eachModule" @click="gotoTransfer">transfer穿梭框Demo</div>
            <div class="eachModule" @click="gotoCollectControl">采集控制</div>
            <div class="eachModule" @click="gotoAxios">Axios测试</div>
            <div class="eachModule" @click="gotoMixin">混入demo</div>
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
                this.$router.push("/onlineMonitor/transfusion");
           },
           gotoStress(){
                this.$router.push("/onlineMonitor/stress");
           },
           gotoIviewSiderBar(){
               this.$router.push("/onlineMonitor/iviewSiderBar");
           },
           gotoTransfer(){
               this.$router.push("/onlineMonitor/iviewTransfer");
           },
           gotoAxios(){
                this.$router.push("/onlineMonitor/axiosTest");
           },
           gotoMixin(){
               this.$router.push("/onlineMonitor/mixinDemo");
           }
        }
    }
</script>
<style lang="scss" scoped>
    .moduleTitle{
        height: 80px;
        line-height: 80px;
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

