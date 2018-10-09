<template>
        <div id="userLogin">
            <div class="title">
                丹江口大坝安全监测信息系统
            </div>
            <div class="loginArea">
                 <div class="loginTitle">系统登陆</div>
                 <el-input class="userName"
                    placeholder="请输入用户名"
                    v-model="userName">
                    <i slot="prefix" class="el-input__icon el-icon-date"></i>
                 </el-input>
                  <el-input
                    type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-date"
                    v-model="userPassword">
                </el-input>
                <el-button class="loginBtn" @click="gotoModuleSelect">登录</el-button>
                <el-checkbox class="autoLogin" v-model="autoLogin">下次自动登陆</el-checkbox>
            </div>
            <div class="footer">
                <span>长江信息空间技术工程有限公司（武汉）官网：</span><a class="gotoHelloWorld" href=""  @click="gotoHelloWorld">http:www.cjsite.com</a>
            </div>
        </div>
</template>
<script>
    export default {
        name:"login",
        data(){
            return{
                userName:'',
                userPassword:'',
                autoLogin:false
            }
        },
        methods:{
            gotoModuleSelect(){
                let $this=this;
                let type='日降雨量';
                this.$$http({
                    method:'get',
                    url:'/environments/'+type+'/all'
                   /* method:'post',
                    url:'monitor/fuzzy_search',
                    data:{name:"变形监测"}*/
                }).then(function(res){
                    if(res.status==200){
                        $this.$store.dispatch('increment',{amount:10}).then(()=>{
                            console.log($this.$store.state.changeLoginStatus.loginStatus);
                        });
                        $this.$router.push({path:'homePage'});

                    }else{
                        console.log(res.info);
                    }
                })
            },
            gotoHelloWorld(){
                 this.$router.push({path:'foo'});
            }
        }
    }
</script>
<style lang="scss" scoped>
#userLogin{
    height:100vh;
    padding-top: 100px;
    position: relative;
    .title{
   font-size: 20px;
   text-align: center;
}
.loginArea{
        width: 400px;
    margin: 150px auto;
    background-color:rgba(0,191,255,0.2);
    padding: 20px;
    .loginTitle{
        color:#fff;
        text-align: center;
    }
    .userName{
        margin-top:20px;
        margin-bottom:10px;
    }
    .loginBtn{
        margin-top: 10px;
        width: 100%;
        background-color: #fff45c;
        font-weight: bold;
        margin-bottom:10px;
    }
}
.footer{
    position: absolute;
    bottom:0px;
    width:100%;
    height:50px;
    line-height:50px;
    background-color: #112973;
    text-align:center;
    color:#fff;
    .gotoHelloWorld{
        color:#fff;
    }
}
}
</style>