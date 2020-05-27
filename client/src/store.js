import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state: {
        result: []
    },
    mutations: {
        changeResult(state, payload) {
            state.result = payload
        }
    }
});