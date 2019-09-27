var myMixin={
    data(){
        return{
            myMixinAttribute:"myMxin",
            myMixinConflict:"myMixinConflict"
        }
    },
    methods:{
        changeMyMixin(){
            this.myMixinAttribute="myMixinChanged";
        },
        changeMyMixinConflict(){
            this.myMixinConflict="myMixinConflictChangedByMixin";
        }
    }
}
export default myMixin