<template>
  <div class="hello">

    <img src="../assets/ponz_by_40kino.png" v-on:mouseover="mouseOver" ><br>

    <h1>{{ Ponz }}</h1>
    &#xe900;
    <h2>{{ title1 }}</h2>
    <ul>
      <li>
        <a
          href="https://www.youtube.com/channel/UCcGXRoQwNzjiZzJiXgiCRHA"
          target="_blank"
          class="icon"
        >
        <i class="fab fa-youtube fa-2x" />
        </a>
      </li>
      <li>
        <a
          href="https://soundcloud.com/ponzliquid"
          target="_blank"
          class="icon"
        >
        <i class="fab fa-soundcloud fa-2x" />
        </a>
      </li>
      <li>
        <a
          href="http://www.nicovideo.jp/user/8065114"
          target="_blank"
          class="icon"
        >
          nico
        </a>
      </li>
    </ul>

    <h2>{{ title2 }}</h2>
    <ul>
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

    <h2>{{ title3 }}</h2>
    <ul>
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
        <i class="fas fa-envelope fa-2x" />
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
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      Ponz: 'Ponz',
      title1: 'Media',
      title2: 'Dev',
      title3: 'Contact'
    }
  },
  methods: {
    mouseOver: function () {
      console.log('aaaaaaaaa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
  font-size: xx-large;
}
h2{
  font-weight: normal;
  font-size: medium;
  margin-bottom: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 36px;
}
li {
  display: inline-block;
  padding: 24px;
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
</style>
