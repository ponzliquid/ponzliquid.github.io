<template>
  <div>

    <h1>{{ pagetitle }}</h1>

    <div id="container">

      <h2>{{ message_sfcd001 }}</h2>
      <!-- <div class="yt"> -->
          <a href="https://ponzliquid.fanlink.to/ascension">
        <img src="../assets/SFCD-001.png" width=100%>
        </a>
      <!-- </div> -->

      <div class="spacer">
      </div>

      <h2>{{ message_sc }}</h2>
      <div class="sc">
        <iframe width="800" height="450" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/77993825&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>

      <div class="spacer">
      </div>

      <h2>{{ message_yt }}</h2>
      <div class="yt">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLd2KvZnOeVuh8tPWaPIlKaigHdADGn541" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>

      <div class="spacer">
      </div>

      <h2>{{ message_nc }}</h2>
      <div class="yt">
        <iframe width="312" height="176" src="https://ext.nicovideo.jp/thumb_mylist/63019592" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"><a href="http://www.nicovideo.jp/mylist/63019592">【ニコニコ動画】</a></iframe>        <!-- <iframe width="320" height="160" src="https://ext.nicovideo.jp/thumb_user/8065114" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe> -->
      </div>

      <div class="spacer">
      </div>

      <h2>{{ message_pixiv }}</h2>
      <div class="yt">
        <a href="https://www.pixiv.net/fanbox/creator/20876745">
        <img src="../assets/2dcode.png" width=40%>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Discography',
  data () {
    return {
      pagetitle: 'Discography',
      message_sfcd001: '👇Trance Album👇',
      message_sc: '👇SoundCloud Tracks👇',
      message_yt: '👇YouTube Playlist👇',
      message_nc: '👇NicoNico Mylist👇',
      message_pixiv: '👇Click/Scan to Donate me!👇'
    }
  }
}
</script>

<style scoped>

.spacer{
  height: 80px;
  opacity: 0.8;
}

h1{
  display: center;
  font-weight: normal;
  font-size: xx-large;
  margin-bottom: 20px;
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

.sc {
  position:relative;
  width:100%;
  height:0;
  padding-top:85%;
}
.sc iframe{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}

.yt {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}
.yt iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
