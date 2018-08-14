<template>
  <div class="disco">

    <h2>{{ pagetitle }}</h2>

    <div class="spacer">
    </div>

    <div id="container">
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/77993825&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

    <div class="spacer">
    </div>

    <div class="frame-wrapper__video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLd2KvZnOeVuh8tPWaPIlKaigHdADGn541" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe>
    </div>

    <div class="spacer">
    </div>

    <div class="frame-wrapper__video">
    <iframe width="312" height="176" src="http://ext.nicovideo.jp/thumb_mylist/62908942" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"><a href="http://www.nicovideo.jp/mylist/62908942">【ニコニコ動画】</a></iframe>
    </div>

    <div class="spacer">
    </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Discography',
  data () {
    return {
      pagetitle: 'Discography'
    }
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
  max-width: 480px;
  margin: 0 auto;
  z-index: -1;
}
</style>
