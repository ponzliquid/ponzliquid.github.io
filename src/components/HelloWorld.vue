<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i class="icomoon"></i>

    <!-- <h2>Contact</h2> -->
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
          href="https://www.youtube.com/channel/UCcGXRoQwNzjiZzJiXgiCRHA"
          target="_blank"
          class="icon"
        >
        <i class="fab fa-youtube fa-2x" />
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
      msg: 'Ponz-folio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 64px;
}
li {
  display: inline-block;
  margin: 0 32px;
}
a {
  color: #FED766;
}
a.icon {
  color: #EFF1F3;
}
</style>
