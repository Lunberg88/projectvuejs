import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0,
        auth: false,
        access_token: null,
        user_id: null,
        expires_in: null
    },
    initialize() {
        this.state.access_token = localStorage.getItem('access_token')
        this.state.expires_in = parseInt(localStorage.getItem('expires_in'))
    },
    set(api_token, user_id) {
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('expires_in', expires_in)
        this.initialize()
    },
    remove() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('expires_in')
        this.initialize()
    },

    getters: {
        getUser: state => {
            return state.user;
        }
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
    },
    actions: {

    }

})

export default store