<template>
    <div>
        视频监控数量：{{videoMonitorNumber}}
    </div>
</template>
<script>
export default{
    name:"collectControl",
    data(){
        return {
            videoMonitorNumber:1
        }
    },
    methods:{
        videoPlusOne(){
            this.videoMonitorNumber+=1;
        }
    }
}
</script>
