<template>
  <div id="app">
    <myheader></myheader>
      <div class="wrap-all">
        <div class="wrap-all-inner">
          <div class="container-contents">
            <div class="content wrap">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
      <div id="modals">
        <component v-for="(modal) in modals" :is="modal.component"  :key="modal.id" :params="modal.params"></component>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import myheader from './components/myheader'
// モーダル用コンポーネント
import ModalAlert from './components/Modal/Alert'
import store from './components/store/'

Vue.component('modalAlert', ModalAlert)

export default {
  name: 'App',
  components: {
    myheader,
    ModalAlert
  },
  computed: {
    modals: () => {
      return store.getters.modals
    }
  }
}
</script>

<style>
  body{
    background-color: #272727;
    color: #EFF1F3;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #EFF1F3;
  margin: 60px;
}
</style>
