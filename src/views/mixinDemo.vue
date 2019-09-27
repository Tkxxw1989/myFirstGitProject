<template>
    <div>
        <div>MixinDemo</div>
        <div>{{componentOwnAttribute}}</div>
        <div>{{myMixinAttribute}}</div>
        <div>{{myMixinConflict}}</div>
        <div><el-button @click="gotoMixinMethod">调用Mixin方法</el-button></div>
        <div><el-button @click="gotoMixinConflict">调用MixinConflict方法</el-button></div>
    </div>
</template>
<script>
import myMixin from "@/script/mixin";
export default {
    name:'myMixin',
    mixins: [myMixin],
    data(){
        return{
            componentOwnAttribute:"componentOwn"//组件自身的属性
        }
    },
    methods:{
        gotoMixinMethod(){
            this.changeMyMixin();
        },
        gotoMixinConflict(){
            this.changeMyMixinConflict();//当组件和混入冲突时以组件本身为准
        },
        changeMyMixinConflict(){
            this.myMixinConflict="myMixinChangeByComponentOwn";
        }
    }
}
</script>
