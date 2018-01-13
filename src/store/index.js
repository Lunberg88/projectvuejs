import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0,
        auth: false
    },
    mutations: {
        upper(state) {
            state.counter++
        },
        downn(state) {
            state.counter--
        },
        logg(state) {
            state.auth = true
        },
        out(state) {
            state.auth = false
        }
    }
})

export default store