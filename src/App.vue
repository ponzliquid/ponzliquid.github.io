<template>
  <div id="app">
        <div class="overpanel">
          <myheader></myheader>
        </div>
        <router-view></router-view>
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
// import Tweet from './components/twitter_emb'

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
}
.overpanel {
    position: relative;
    opacity: 0.9;
}
</style>
