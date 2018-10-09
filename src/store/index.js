import Vue from 'vue';
import Vuex from 'vuex';
import changeLoginStatus from './changeLoginStatus';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        changeLoginStatus
    }
});