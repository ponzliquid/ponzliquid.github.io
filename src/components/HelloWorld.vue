<template>
  <div class="hello">

    <div id="container">
      <img src="../assets/ponz_by_40kino.png" v-on:mouseover="mouseOver">
    </div>

    <h1>{{ Ponz }}</h1>

    <h3>{{ profile }}</h3>
    <div id="container">
      <div class="frame-wrapper__video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLd2KvZnOeVuh8tPWaPIlKaigHdADGn541" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>

    <!-- <h2>{{ title_contact }}</h2> -->
    <ul>
      <li>
        <a
          href=""
          target="_blank"
          class="icon"
        >
        <i class="fas fa-envelope fa-2x" />
        </a>
      </li>
        <li>
        <a
          href="https://twitter.com/ponzliquid"
          target="_blank"
          class="icon"
        >
        <i class="fab fa-twitter fa-2x" />
        </a>
      </li>
      <li>
        <a
          href=""
          target="_blank"
          class="icon"
        >
        <i class="fab fa-discord fa-2x" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ponzliquid"
          target="_blank"
          class="icon"
        >
        <i class="fab fa-github fa-2x" />
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      Ponz: 'Ponz',
      title_workd: 'Works',
      title_dev: 'Dev',
      title_contact: 'Contact',
      profile: 'Vocaloid Producer, Trance Composer, Remixer'
    }
  },
  methods: {
    mouseOver: function () {
      console.log('hover/tap')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  display: center;
  font-weight: normal;
  font-size: xx-large;
}
h2{
  font-weight: normal;
  font-size: medium;
  margin-bottom: 20px;
}
h3{
  font-weight: x-small;
  font-size: small;
  margin-bottom: 48px;
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
}
.frame-wrapper__video iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#container {
  max-width: 480px;
  margin: 0 auto;
}
</style>
