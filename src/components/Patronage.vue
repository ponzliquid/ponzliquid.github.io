<template>
  <div class="patron">

    <h1>{{ pagetitle }}</h1>

    <h2>{{ message_tw }}</h2>

    <div id="container">

      <span>
        <Timeline :id="'TOMO70878254'" :sourceType="'profile'" :options="{ tweetLimit: '2' }"/>
      </span>

      <h2>{{ message_map }}</h2>
      <!-- <my-map :markers='[
        {"lat":34.9787894,"lng":135.8999402}
        ]'>
      </my-map> -->

      <div class="gmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13076.459150507137!2d135.8999402!3d34.9787894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d6abc683f4b9cbd!2z5Yqg6Jek5bGLIOOBq-OBvOasoeaclw!5e0!3m2!1sja!2sjp!4v1534225365434" width="300" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>

      <div class="spacer">
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import Emb from '../components/twitter_emb'
import Timeline from 'vue-tweet-embed/timeline'
import MyMap from './services/MyMap'

Vue.component('my-map', MyMap)
// Vue.component('emb', Emb)

export default {
  name: 'Patronage',
  data () {
    return {
      pagetitle: 'Patronage',
      message_tw: '🍜Delicious🍜',
      message_map: '👇Visit!👇'
    }
  },
  components: {
    // 'emb': Emb
    'Timeline': Timeline
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.spacer{
  /* width: 100%; */
  height: 80px;
  /* padding: 0; */
  /* position: fixed; */
  /* background-color: #000000; */
  opacity: 0.8;
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
  font-size: medium;
  margin-bottom: 20px;
  color: #696773;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  padding: 24px;
  margin-bottom: 12px;
}
a {
  color: #FED766;
}
a.icon {
  color: #EFF1F3;
}
a:hover {
  color: #FED766;
}
.gmap {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  /* z-index: -1; */
}
.gmap iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: -1; */
}
#container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
