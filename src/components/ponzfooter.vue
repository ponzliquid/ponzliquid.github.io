<template>
  <!-- <div id="container"> -->
    <div id="tc">
      <h3>{{ copyright }}</h3>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'ponzfooter',
  data () {
    return {
      copyright: '© 2018 Ponzliquid'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#tc {
  /* background-color: #000000; */
  /* opacity: 0.9; */
}
#container {
  /* background-color: #000000;
  opacity: 0.9; */
  width: 100%;
  position: relative;
  height: auto !important;
  height: 100%;
  min-height: 100%;
}
#footer {
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #000000;
  opacity: 0.9;
  margin-left: -10px;
  margin-bottom: -10px;
}
h1{
  display: center;
  font-weight: normal;
  font-size: xx-large;
}
h2{
  font-weight: normal;
  font-size: large;
  margin-bottom: 20px;
}
h3{
  font-weight: normal;
  font-size: small;
  /* margin-bottom: 0px; */
  color: #696773;
}
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  line-height: 25px;
  color: #EFF1F3;
}

a:hover {
  border-radius: 5px;
  background-color: #FED766;
  color: #272727;
  opacity: 1.0;
}

</style>
