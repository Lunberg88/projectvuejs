<template>
  <div id="app">
    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Vuejs Project</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link to="/" tag="li" exact-active-class="active"><a>Home</a></router-link>
            <router-link to="/static" tag="li" active-class="active"><a>Static</a></router-link>
            <router-link to="/news" tag="li" active-class="active"><a>News</a></router-link>
            <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
            <router-link to="/login" tag="li" active-class="active"><a>Login</a></router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a @click="logg" class="btn btn-warning">Show</a></li>
            <li><a @click="out" class="btn btn-danger">Hide</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <!--<div class="container">
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
            <router-link to="/login" class="btn btn-primary">Login</router-link>
            <router-link to="/user/root" class="btn btn-primary" v-show="auth">User</router-link>
          </div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>-->
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
/*
.btn {
  border: 0 !important;
  border-radius: 0 !important;
}
*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
