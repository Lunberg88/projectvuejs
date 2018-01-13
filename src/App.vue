<template>
  <div id="app">
    <div class="container">
    <img src="./assets/logo.png">
      <div class="row">
        <button @click="logg" class="btn btn-warning">show</button>
        <button @click="out" class="btn btn-danger">hide</button>
        <br /><br />
      </div>
      <div class="row">
          <div class="col-md-offset-4 col-md-4">
            <router-link to="/" class="btn btn-primary">Main page</router-link>
            <router-link to="/static" class="btn btn-primary">Static</router-link>
            <router-link to="/news" class="btn btn-primary">News</router-link>
            <router-link to="/user/root" class="btn btn-primary" v-show="auth">User</router-link>
          </div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'app',
    computed: {
      auth() {
          return store.state.auth
      }
    },
    methods: {
      logg() {
          store.commit('logg')
      },
      out() {
          store.commit('out')
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  border: 0 !important;
  border-radius: 0 !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
