<!--怎样在父组件中调用子组件的方法事例-->
<template>
    <div>
        <button @click="plusCollectControl">调用子组件的方法</button>
         <component v-bind:is="currentTabComponent" ref="subComponentMethod"></component>
    </div>    
    
</template>
<script>
import collectControl from "../views/collectControl.vue";
export default{
    name:'componentMethod',
    components:{
        collectControl
    },
       data(){
        return {
           currentTabComponent:'collectControl' 
        }
       },
       methods:{
           plusCollectControl(){
              this.$refs.subComponentMethod.plusOne();
           }
       }
}
</script>
