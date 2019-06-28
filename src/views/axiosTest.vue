<template>
    <div id="axiosTest">
    <div>axios测试</div>
    <Button @click="getMethodTest">get方法测试</Button>
    <Button @click="methodClear('get')">get方法clear</Button>
    <div>{{getInfo}}</div>
    <Button @click="postMethodTest">post方法测试</Button>
    <Button @click="methodClear('post')">post方法clear</Button>
    <div>{{postInfo}}</div>
    </div>
</template>
<script>
export default {
name:"axiosTets",
data(){
    return {
            getInfo:"",
            postInfo:""      
    }
}, 
methods:{
    getMethodTest(){
         var $this=this;
        this.$$http(
        'AnalysisModel/GetModelByID?',
        'get',{ModelID:11},{}
        ).then(function(res){
            if(res.status==200){
                $this.getInfo=res.data;
            }else{
                $this.$message.warning(res.info);
            }
        })
    },
    postMethodTest(){
        var $this=this;
        this.$$http('user/login','post',{},{
            UserName:"administrator",
            PassWord:"123456"
        }).then(function(res){
            if(res.status==200){
                $this.postInfo=res.data.UserInfo.F_OrganizeId;
            }else{
                $this.$message.warning(res.info);
            }
        })
    },
    methodClear(methodWay){
        if(methodWay=="get"){
            this.getInfo="";
        }else{
            this.postInfo="";
        }
    }
}   
}
</script>


