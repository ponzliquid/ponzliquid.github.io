<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import myheader from './components/myheader'
export default {
  name: 'App',
  components: {
    myheader
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
