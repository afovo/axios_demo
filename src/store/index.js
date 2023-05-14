import {createStore} from 'vuex'
import request from "@/utils/request";
export default createStore({
    state: {
        data: ''
    },
    getters: {
        getData(state) {
            return state.data
        }
    },
    mutations: {
        setData(state, data) {
            state.data = data
        }
    },
    actions: {
        initData ({commit}) {
            request.get('/demo.json').then(res => {
                let data = res.data.data;
                console.log(data)
                commit('setData', data)
            })
        },
    },
    modules: {}
})
