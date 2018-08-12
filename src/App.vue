<template>
  <div id="app">
    <img src="./assets/ponz_by_40kino.png"><br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
