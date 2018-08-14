<template>
  <div class="patron">

    <h2>{{ pagetitle }}</h2>

    <div class="spacer">
    </div>

    <div id="container">

    <span>
<!-- <a class="twitter-timeline" data-lang="en" href="https://twitter.com/TOMO70878254?ref_src=twsrc%5Etfw">Tweets by TOMO70878254</a> -->
    <!-- <emb></emb> -->
    <Timeline :id="'TOMO70878254'" :sourceType="'profile'" :options="{ tweetLimit: '2' }"/>
    </span>

    <div class="spacer">
    </div>

    <div class="spacer">
    </div>

    </div>

  </div>
</template>

<script>
// import Vue from 'vue'
// import Emb from '../components/twitter_emb'
import Timeline from 'vue-tweet-embed/timeline'

// Vue.component('emb', Emb)

export default {
  name: 'Patronage',
  data () {
    return {
      pagetitle: 'Patronage'
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
.frame-wrapper__video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  z-index: -1;
}
.frame-wrapper__video iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
#container {
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 280px;
  margin: 0 auto;
  z-index: -1;
}
</style>
