export default {
    state:{
        loginStatus:0
    },
    mutations:{
        increment(state,payLoad){
            state.loginStatus+=payLoad.amount;
        }
    },
    actions: {
        increment (context,payLoad) {
          context.commit('increment',payLoad)
        }
      }
}