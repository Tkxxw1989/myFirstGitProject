<!--怎样在父组件中调用子组件的方法事例-->
<template>
    <div>
        <ul>
            <li @click="selectSubComponent('collectControl')">转到采集控制子组件</li>
            <li @click="selectSubComponent('videoMonitor')">转到视频控制子组件</li>

        </ul>
        <button @click="plusCollectControl">调用采集控制子组件的方法</button>
        <button @click="plusVideoMonitor">调用视频子组件的方法</button>
         <component v-bind:is="currentTabComponent" ref="subComponentMethod"></component>
    </div>    
    
</template>
<script>
import collectControl from "../views/collectControl.vue";
import videoMonitor from "../views/videoMonitor.vue";
export default{
    name:'componentMethod',
    components:{
        collectControl,
        videoMonitor
    },
       data(){
        return {
           currentTabComponent:'collectControl' 
        }
       },
       methods:{
           selectSubComponent(name){
               if(name=="collectControl"){
                    this.currentTabComponent="collectControl";
               }else{
                    this.currentTabComponent="videoMonitor";
               }
           },
           plusCollectControl(){
              this.$refs.subComponentMethod.plusOne();
           },
           plusVideoMonitor(){
               this.$refs.subComponentMethod.videoPlusOne();
           }
       }
}
</script>
