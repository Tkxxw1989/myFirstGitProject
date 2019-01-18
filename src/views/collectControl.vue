<template>
    <div>
        采集控制数量：{{collectControlNumber}}
    </div>
</template>
<script>
export default{
    name:"collectControl",
    data(){
        return {
            collectControlNumber:1
        }
    },
    methods:{
        plusOne(){
            this.collectControlNumber+=1;
        }
    }
}
</script>
